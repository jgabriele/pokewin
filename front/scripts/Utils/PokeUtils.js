const RATIO_EFFICIENT = 1.25;
const RATIO_WEAK = 0.8;

export default {
  getCounters(efficiencyThreshold, pokemons, pokemon){
    return pokemons
      .map(this.getCountersDataForPokemon.bind(null, efficiencyThreshold, pokemon))
      .filter(p => p); // Filter null efficiencies
  },

  getCountersDataForPokemon(efficiencyThreshold, pokemon, otherPokemon){
    const moves = _getEnoughEfficienMoves(otherPokemon, pokemon, efficiencyThreshold);

    if (!moves) {
      return null;
    }

    return {
      id: otherPokemon.id,
      key: otherPokemon.key,
      moves,
      cpMax: otherPokemon.cpMax,
      pokemon: otherPokemon // Keep trace of initial pokemon data (used for onClick)
    };
  }
};

/*
 * Return the list of moves that are efficient enough for attackPokemon to
 * win against defensePokemon.
 * To do that we take the best moves against each pokemon, and "make them fight".
 * We get two ratio:
 *   - attackPokemon moves against defensePokemon - attackRatio
 *   - defensePokemon moves against attackPokemon - defenseRatio
 * We return the moves only if attackRatio / defenseRatio >= efficiencyThreshold
 * @return {Array} moves or nothing
 */
function _getEnoughEfficienMoves(attackPokemon, defensePokemon, efficiencyThreshold) {
  const bestMovesAttack = _getBestMoves(attackPokemon, defensePokemon);
  const bestMovesDefense = _getBestMoves(defensePokemon, attackPokemon);

  const totalAttack = bestMovesAttack.quick.efficiency + bestMovesAttack.special.efficiency;
  const totalDefense = bestMovesDefense.quick.efficiency + bestMovesDefense.special.efficiency;

  const efficiency = totalAttack / totalDefense;

  bestMovesAttack.quick.efficiency = efficiency;
  bestMovesAttack.special.efficiency = efficiency;

  if (efficiency >= efficiencyThreshold) {
    return [].concat(bestMovesAttack.quick).concat(bestMovesAttack.special);
  }
}

/*
 * Calculates the best moves from an attacker against a defenser
 * Try all quick and special moves of attackPokemon against defensePokemon
 * and return the best of each
 * @param {Pokemon} attackPokemon – The attacker
 * @param {Pokemon} defensePokemon – The defenser
 * @return {Object} Best moves
 */
function _getBestMoves(attackPokemon, defensePokemon) {
  const quickMoves = attackPokemon.moves.quick;
  const specialMoves = attackPokemon.moves.charge;

  let bestQuickMove;
  quickMoves.reduce((state, move) => {
    const moveEfficiency = _calculateMoveEfficiency(
      attackPokemon,
      move,
      defensePokemon.types
    );

    if (!bestQuickMove || bestQuickMove.efficiency < moveEfficiency) {
      bestQuickMove = Object.assign({}, move, {
        efficiency: moveEfficiency
      });
    }
  }, quickMoves[0]);

  let bestSpecialMove;
  specialMoves.forEach((move) => {
    const moveEfficiency = _calculateMoveEfficiency(
      attackPokemon,
      move,
      defensePokemon.types
    );

    if (!bestSpecialMove || bestSpecialMove.efficiency < moveEfficiency) {
      bestSpecialMove = Object.assign({}, move, {
        efficiency: moveEfficiency
      });
    }
  });

  return {
    quick: bestQuickMove,
    special: bestSpecialMove
  }
}

/*
 * Calculate the efficiency of a single move from an attacker to a defenser
 * Takes in account STAB and weaknesses of defenser against this move
 * @param {Pokemon} attackPokemon – Attacker. We could only need its types, just used for STAB
 * @param {Move} attackMove – Move used for the attack
 * @param {Array} defenseTypes – Types of the defenser pokemon
 * @return {Number} efficiency multiplier for the move
 */
function _calculateMoveEfficiency(attackPokemon, attackMove, defenseTypes) {
  // Efficiency of attack pokemon move against defensePokemon
  let attackEfficiency = attackMove.dps;

  // STAB
  if (_isSTAB(attackMove, attackPokemon)) {
    attackEfficiency *= RATIO_EFFICIENT;
  }

  defenseTypes.forEach((defenseType) => {
    if (_isTypeEfficient(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_EFFICIENT;
    } else if (_isTypeWeak(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_WEAK;
    }
  });

  return attackEfficiency;
}

/*
 * Calculate whether type 1 is efficient against type 2
 * @param {Type} type1
 * @param {Type} type2
 */
function _isTypeEfficient(type1, type2) {
  return type1.damages.double.to.indexOf(type2.id) !== -1; // type1 does 1.25 damages on type2
}

/*
 * Calculate whether type 1 is weak against type 2
 * @param {Type} type1
 * @param {Type} type2
 */
function _isTypeWeak(type1, type2) {
  return type1.damages.half.to.indexOf(type2.id) !== -1 || // type1 does 0.8 damages on type2
    type1.damages.no.to.indexOf(type2.id) !== -1; // no === half in PokeGo
}

/*
 * Calculate whether the move is STAB or not
 * @param {Move} move
 * @param {Pokemon} pokemon
 */
function _isSTAB(move, pokemon) {
  return (pokemon.types.map(t => t.id).indexOf(move.type.id) !== -1);
}