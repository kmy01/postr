const SessionApiUtil = require('../util/session_api_util');
const SessionConstants = require('../constants/session_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');

module.exports = {
  signup(userData) {
    SessionApiUtil.signup(
      userData,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  login(userData) {
    SessionApiUtil.login(
      userData,
      this.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logout() {
    SessionApiUtil.logout(
      this.removeCurrentUser,
      ErrorActions.setErrors
    );
  },

  receiveCurrentUser(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
      user: user
    });
  }
};
