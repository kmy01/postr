const AppDispatcher = require('../dispatcher/dispatcher');
const FollowApiUtil = require('../util/follow_api_util');
const FollowConstants = require('../constants/follow_constants');
const ErrorActions = require('../actions/error_actions');

module.exports ={
  createFollow(followData) {
    FollowApiUtil.createFollow(followData, this.receiveFollow, ErrorActions.setErrors);
  },

  deleteFollow(followData) {
    FollowApiUtil.deleteFollow(followData, this.removeFollow, ErrorActions.setErrors);
  },

  receiveFollow(follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_RECEIVED,
      follow: follow
    });
  },

  removeFollow(follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_REMOVED,
      follow: follow
    });
  }
};
