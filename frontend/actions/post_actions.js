const PostApiUtil = require('../util/post_api_util');
const PostConstants = require('../constants/post_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');

module.exports = {
  fetchAllPosts() {
    PostApiUtil.fetchAllPosts(this.receiveAllPosts, ErrorActions.setErrors);
  },

  fetchTaggedPosts(tagName) {
    PostApiUtil.fetchTaggedPosts(tagName, this.receiveAllPosts, ErrorActions.setErrors);
  },

  fetchSinglePost(id) {
    PostApiUtil.fetchSinglePost(id, this.receiveSinglePost, ErrorActions.setErrors);
  },

  createPost(postData) {
    PostApiUtil.createPost(postData, this.receiveSinglePost, ErrorActions.setErrors);
  },

  updatePost(postData) {
    PostApiUtil.updatePost(postData, this.receiveSinglePost, ErrorActions.setErrors);
  },

  deletePost(id) {
    PostApiUtil.deletePost(id, this.removePost, ErrorActions.setErrors);
  },

  receiveAllPosts(posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveSinglePost(post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  removePost(id) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_REMOVED,
      id: id
    });
  }
};
