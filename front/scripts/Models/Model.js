const Model = function (key) {
  this._key = key;

  if (!localStorage) {
    return;
  }

  this._isWorking = true;

  this._data = this.get();
  this.save();
}

Model.prototype.get = function (id) {
  if (!this._isWorking) {
    return;
  }

  const storageData = localStorage.getItem(this._key);
  const data = storageData && storageData.split(',').map((numberString) => Number(numberString)) || [];

  // If we passed an id, return if this id is in the data
  // Else return all the favourites
  if (typeof(id) === 'number') {
    return data.indexOf(id) !== -1;
  } else {
    return data;
  }
}

Model.prototype.add = function (id) {
  if (!this._isWorking) {
    return;
  }

  const isAlreadyAdded = this.get(id);
  if (!id || isAlreadyAdded) {
    return;
  }

  this._data.push(Number(id));
  this.save();
}

Model.prototype.remove = function (id) {
  if (!this._isWorking) {
    return;
  }

  const isAlreadyAdded = this.get(id);
  if (!id || !isAlreadyAdded) {
    return;
  }

  const index = this._data.indexOf(Number(id));
  this._data = this._data
    .slice(0, index)
    .concat(this._data.slice(index+1));

  this.save();
}

Model.prototype.toggle = function (id) {
  if (!this._isWorking) {
    return;
  }

  if (this.get(id)) {
    this.remove(id);
  } else {
    this.add(id);
  }

  this.save();
}

Model.prototype.save = function () {
  if (!this._isWorking) {
    return;
  }

  localStorage.setItem(this._key, this._data);
}

export default Model;