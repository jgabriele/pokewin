import DodgeFrequencyController from '../Controllers/DodgeFrequency';

const RATIO_EFFICIENT = 1.25;
const RATIO_WEAK = 0.8;

const DODGE_TO_MULTIPLER = {
  undefined: 1,
  [DodgeFrequencyController.FREQUENCY.NEVER]: 1,
  [DodgeFrequencyController.FREQUENCY.PARTLY]: 0.6,
  [DodgeFrequencyController.FREQUENCY.ALWAYS]: 0.25
}

export default {
  getCounters(efficiencyThreshold, pokemons, pokemon) {
    return pokemons
      .map((p) => this.getCountersDataForPokemon(efficiencyThreshold, pokemon, p))
      .filter(p => p) // Filter null efficiencies
  },

  getWeaks(efficiencyThreshold, pokemons, pokemon) {
    return pokemons
      .map((p) => this.getWeaksDataForPokemon(efficiencyThreshold, pokemon, p))
      .filter(p => p) // Filter null efficiencies
  },

  getCountersDataForPokemon(efficiencyThreshold, pokemon, otherPokemon){
    const moves = _getEnoughEfficientMoves(otherPokemon, pokemon, efficiencyThreshold)

    if (!moves) {
      return null;
    }

    return {
      id: otherPokemon.id,
      key: otherPokemon.key,
      moves,
      cpMax: otherPokemon.cpMax,
      pokemon: otherPokemon // Keep trace of initial pokemon data (used for onClick)
    }
  },

  getWeaksDataForPokemon(efficiencyThreshold, pokemon, otherPokemon){
    const moves = _getEnoughEfficientMoves(pokemon, otherPokemon, efficiencyThreshold)

    if (!moves) {
      return null
    }

    return {
      id: otherPokemon.id,
      key: otherPokemon.key,
      moves,
      cpMax: otherPokemon.cpMax,
      pokemon: otherPokemon // Keep trace of initial pokemon data (used for onClick)
    }
  }
}

/*
 * Return the list of moves that are efficient enough for attackPokemon to
 * win against defensePokemon.
 * To do that we take the best moves against each pokemon, and "make them fight".
 * We get the total DPS for each side, but we also know the HP of pokemons so
 * we can easily calculate how long it will take for each pokemon to put the other
 * one KO. We do a ratio between those two times and we only return it if this
 * ratio reaches a particular threshold
 * @return {Array} moves or nothing
 */
function _getEnoughEfficientMoves(attackPokemon, defensePokemon, efficiencyThreshold) {
  const bestMovesAttack = _getBestMoves(attackPokemon, defensePokemon)
  const bestMovesDefense = _getBestMoves(defensePokemon, attackPokemon)

  const quickFrequencyMultiplier = DODGE_TO_MULTIPLER[DodgeFrequencyController.getQuickMovesDodgeFrequency()]
  const specialFrequencyMultiplier = DODGE_TO_MULTIPLER[DodgeFrequencyController.getSpecialMovesDodgeFrequency()]

  const totalAttack = bestMovesAttack.quick.efficiency + bestMovesAttack.special.efficiency
  const totalDefense = bestMovesDefense.quick.efficiency * quickFrequencyMultiplier +
    bestMovesDefense.special.efficiency  * specialFrequencyMultiplier

  // Usually HP is (Base Stamina + Stamina IV) * CPM
  // But we'll simplify this version not to include CPM but 0.7 (0.8 is max CPM)
  const attackHP = attackPokemon.stm * 0.7
  const defenseHP = defensePokemon.stm * 0.7 * 1.25 // Should be x2 but people are not ready for this

  // We know the total DPS for atk/def, we know the HP of each pokemons (stamina)
  // We can calculate how many seconds will be needed to make the pokemon KO
  const attackTimeToKO = defenseHP / totalAttack
  const defenseTimeToKO = attackHP / totalDefense

  const efficiency = Math.min(defenseTimeToKO / attackTimeToKO, 4) // Not to show unrealistic results

  if (efficiency >= efficiencyThreshold) {
    bestMovesAttack.quick.efficiency = efficiency
    bestMovesAttack.special.efficiency = efficiency

    return [bestMovesAttack.quick, bestMovesAttack.special]
  }
}

/*
 * Calculates the best moves from an attacker against a defender
 * Try all quick and special moves of attackPokemon against defensePokemon
 * and return the best of each
 * @param {Pokemon} attackPokemon – The attacker
 * @param {Pokemon} defensePokemon – The defender
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
      defensePokemon
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
      defensePokemon
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
 * Calculate the efficiency of a single move from an attacker to a defender
 * Takes in account STAB and weaknesses of defender against this move
 * @param {Pokemon} attackPokemon – Attacker. We could only need its types, just used for STAB
 * @param {Move} attackMove – Move used for the attack
 * @param {Array} defenseTypes – Types of the defender pokemon
 * @return {Number} efficiency multiplier for the move
 */
function _calculateMoveEfficiency(attackPokemon, attackMove, defensePokemon) {
  // Efficiency of attack pokemon move against defensePokemon
  let attackEfficiency = 1;

  // STAB
  if (_isSTAB(attackMove, attackPokemon)) {
    attackEfficiency *= RATIO_EFFICIENT;
  }

  defensePokemon.types.forEach((defenseType) => {
    if (_isTypeEfficient(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_EFFICIENT;
    } else if (_isTypeWeak(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_WEAK;
    }
  });

  return computeDamage(attackPokemon.atk, defensePokemon.def, attackMove.dps, attackEfficiency);
}

// Formula taken on
// https://www.reddit.com/r/TheSilphRoad/comments/4wzll7/testing_gym_combat_misconceptions
// Floor ( .5 Attack / Defense * Power * STAB * Weakness ) + 1
function computeDamage(attackerAttack, defenserDefense, baseDamage, efficiency) {
  const atkDefRatio = attackerAttack / defenserDefense;
  return Math.floor(0.5 * atkDefRatio * baseDamage * efficiency) + 1;
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