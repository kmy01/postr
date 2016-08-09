const AppDispatcher = require('../dispatcher/dispatcher');
const PostConstants = require('../constants/post_constants');
const LikeConstants = require('../constants/like_constants');

const Store = require('flux/utils').Store;

const PostStore = new Store(AppDispatcher);

let _posts = {};

PostStore.all = function() {
  return Object.keys(_posts).map((id) => {
    return Object.assign({}, _posts[id]);
  });
};

PostStore.find = function(id) {
  return Object.assign({}, _posts[id]);
};

PostStore._resetAllPosts = function(posts) {
  _posts = {};
  posts.forEach((post) => {
    _posts[post.id] = post;
  });
  this.__emitChange();
};

PostStore._addPost = function(post) {
  _posts[post.id] = post;
  this.__emitChange();
};

PostStore._removePost = function(id) {
  delete _posts[id];
  this.__emitChange();
};

PostStore._addLike = function(like) {
  _posts[like.post_id].likes.push(like);
  this.__emitChange();
};

PostStore._removeLike = function(like) {
  const postId = like.post_id;
  const likeId = like.id;
  _posts[postId].likes.forEach((likeEl, i) => {
    if (likeEl.id === likeId) {
      _posts[postId].likes.splice(i, 1);
      return false;
    }
  });
  this.__emitChange();
};

PostStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      this._resetAllPosts(payload.posts);
      break;
    case PostConstants.POST_RECEIVED:
      this._addPost(payload.post);
      break;
    case PostConstants.POST_REMOVED:
      this._removePost(payload.id);
      break;
    case LikeConstants.LIKE_RECEIVED:
      this._addLike(payload.like);
      break;
    case LikeConstants.LIKE_REMOVED:
      this._removeLike(payload.like);
      break;
  }
};

module.exports = PostStore;
