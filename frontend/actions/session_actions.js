const SessionApiUtil = require('../util/session_api_util');
const SessionConstants = require('../constants/session_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  signup(userData) {
    SessionApiUtil.signup(userData, this.receiveCurrentUser, this.errorCb);
  },

  login(userData) {
    SessionApiUtil.login(userData, this.receiveCurrentUser, this.errorCb);
  },

  logout() {
    SessionApiUtil.logout(this.removeCurrentUser, this.errorCb);
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
  },

  errorCb(resp) {

  }
};
