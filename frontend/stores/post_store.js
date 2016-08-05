const AppDispatcher = require('../dispatcher/dispatcher');
const PostConstants = require('../constants/post_constants');
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
  }
};

module.exports = PostStore;
