const AppDispatcher = require('../dispatcher/dispatcher');
const LikeConstants = require('../constants/like_constants');
const Store = require('flux/utils').Store;

const LikeStore = new Store(AppDispatcher);

let _likes = {};

LikeStore.all = function () {
  return Object.keys(_likes).map((id) => {
    return Object.assign({}, _likes[id]);
  });
};

LikeStore.find = function (postId, userId) {
  let like;
  Object.keys(_likes).forEach((id) => {
    if (_likes[id].post_id === postId && _likes[id].user_id === userId) {
      like = _likes[id];
    }
  });
  return like;
};

LikeStore._resetAllLikes = function (likes) {
  _likes = {};
  likes.forEach((like) => {
    _likes[like.id] = like;
  });
  this.__emitChange();
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
    case LikeConstants.LIKES_RECEIVED:
      this._resetAllLikes(payload.likes);
      break;
    case LikeConstants.LIKE_RECEIVED:
      this._addLike(payload.like);
      break;
    case LikeConstants.LIKE_REMOVED:
      this._removeLike(payload.like);
      break;
  }
};

module.exports = LikeStore;
