import Model from './Model';

const PinnedModel = function () {
  Model.apply(this, arguments);
}

PinnedModel.prototype = Object.create(Model.prototype);

const _instance = null;
PinnedModel.getInstance = function () {
  return _instance || new PinnedModel('pinned');
}

export default PinnedModel;