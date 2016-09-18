const FAVOURITES_KEY = 'favourites';

const FavouritesModel = {
  init() {
    if (!localStorage) {
      return;
    }

    this._favourites = this.get();
    this.save();
  },

  get(pokemonId) {
    if (!localStorage) {
      return;
    }

    const storageFavourites = localStorage.getItem(FAVOURITES_KEY);
    const favourites = storageFavourites.split(',').map((numberString) => Number(numberString)) || [];

    // If we passed an id, return if this id is favourited
    // Else return all the favourites
    if (typeof(pokemonId) === 'number') {
      return favourites.indexOf(pokemonId) !== -1;
    } else {
      return favourites || [];
    }
  },

  add(pokemonId) {
    const isAlreadyFavourited = this.get(pokemonId);
    if (!this._favourites || !pokemonId || isAlreadyFavourited) {
      return;
    }

    this._favourites.push(Number(pokemonId));
    this.save();
  },

  remove(pokemonId) {
    const isAlreadyFavourited = this.get(pokemonId);
    if (!this._favourites || !pokemonId || !isAlreadyFavourited) {
      return;
    }

    const index = this._favourites.indexOf(Number(pokemonId));
    this._favourites = this._favourites.slice(0, index).concat(this._favourites.slice(index+1));
    this.save();
  },

  toggle(pokemonId) {
    if (!this._favourites) {
      return;
    }

    if (this.get(pokemonId)) {
      this.remove(pokemonId);
    } else {
      this.add(pokemonId);
    }

    this.save();
  },

  save() {
    if (!localStorage) {
      return;
    }

    localStorage.setItem(FAVOURITES_KEY, this._favourites);
  }
};

// TODO FAVOURITE
// FavouritesModel.init();

export default FavouritesModel;