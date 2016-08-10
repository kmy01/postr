const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const LikeConstants = require('../constants/like_constants');

const SessionStore = new Store(AppDispatcher);
let _currentUser = {};

SessionStore._login = function (user) {
  _currentUser = user;
  this.__emitChange();
};

SessionStore._logout = function () {
  _currentUser = {};
  this.__emitChange();
};

SessionStore.currentUser = function () {
  return { id: _currentUser.id, username: _currentUser.username, avatar_url: _currentUser.avatar_url, liked_posts: _currentUser.liked_posts};
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

SessionStore._removeLikedPost = function(like) {
  _currentUser.liked_posts.forEach((post, i) => {
    post.likes.forEach((likeEl) => {
      if (likeEl.id === like.id) {
        _currentUser.liked_posts.splice(i, 1);
      }
    });
  });
  this.__emitChange();
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      this._login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      this._logout();
      break;
    case LikeConstants.LIKE_REMOVED:
      this._removeLikedPost(payload.like);
      break;
  }
};

module.exports = SessionStore;
