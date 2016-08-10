const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const LikeConstants = require('../constants/like_constants');
const FollowConstants = require('../constants/follow_constants');

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
  return {
    id: _currentUser.id,
    username: _currentUser.username,
    avatar_url: _currentUser.avatar_url,
    liked_posts: _currentUser.liked_posts,
    followees: _currentUser.followees
  };
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

SessionStore._removeLikedPost = function (like) {
  _currentUser.liked_posts.forEach((post, i) => {
    post.likes.forEach((likeEl) => {
      if (likeEl.id === like.id) {
        _currentUser.liked_posts.splice(i, 1);
      }
    });
  });
  this.__emitChange();
};

SessionStore._addFollow = function (follow) {
  _currentUser.liked_posts.forEach((post) => {
    if (post.author.id === follow.followee_id) {
      post.author.followers.push(_currentUser.id);
    }
  });
  this.__emitChange();
};

SessionStore._removeFollow = function (follow) {
  _currentUser.liked_posts.forEach((post) => {
    if (post.author.id === follow.followee_id) {
      const idx = post.author.followers.indexOf(_currentUser.id);
      post.author.followers.splice(idx, 1);
    }
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
    case FollowConstants.FOLLOW_RECEIVED:
      this._addFollow(payload.follow);
      break;
    case FollowConstants.FOLLOW_REMOVED:
      this._removeFollow(payload.follow);
      break;
  }
};

module.exports = SessionStore;
