const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

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
  return { id: _currentUser.id, username: _currentUser.username };
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      this._login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      this._logout();
      break;
  }
};

module.exports = SessionStore;
