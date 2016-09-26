import Model from './Model';

const FavouritesModel = function () {
  Model.apply(this, arguments);
}


FavouritesModel.prototype = Object.create(Model.prototype);

const _instance = null;
FavouritesModel.getInstance = function () {
  return _instance || new FavouritesModel('favourites');
}

export default FavouritesModel;