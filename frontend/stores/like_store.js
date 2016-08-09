const AppDispatcher = require('../dispatcher/dispatcher');
const LikeConstants = require('../constants/like_constants');
const Store = require('flux/utils').Store;

const LikeStore = new Store(AppDispatcher);

const _likes = {};

LikeStore.all = function () {
  return Object.keys(_likes).map((id) => {
    return Object.assign({}, _likes[id]);
  });
};

LikeStore.find = function () {

};

LikeStore._addLike = function(like) {
  _likes[like.id] = like;
  this.__emitChange();
};

LikeStore._removeLike = function(like) {
  delete _likes[like.id];
  this.__emitChange();
};

LikeStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKE_RECEIVED:
      this._addLike(payload.like);
      break;
    case LikeConstants.LIKE_REMOVED:
      this._removeLike(like);
      break;
  }
};
