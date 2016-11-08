const AppDispatcher = require('../dispatcher/dispatcher');
const LikeApiUtil = require('../util/like_api_util');
const LikeConstants = require('../constants/like_constants');
const ErrorActions = require('./error_actions');

module.exports = {
  fetchAllLikes() {
    LikeApiUtil.fetchAllLikes(this.receiveAllLikes, ErrorActions.setErrors);
  },

  createLike(likeData) {
    LikeApiUtil.createLike(likeData, this.receiveLike, ErrorActions.setErrors);
  },

  deleteLike(id) {
    LikeApiUtil.deleteLike(id, this.removeLike, ErrorActions.setErrors);
  },

  receiveAllLikes(likes) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKES_RECEIVED,
      likes: likes
    });
  },

  receiveLike(like) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike(like) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_REMOVED,
      like: like
    });
  }
};
