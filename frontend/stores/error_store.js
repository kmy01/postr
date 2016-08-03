const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = '';

ErrorStore.errors = function (form) {
  if (form === _form) {
    return _errors.slice(0);
  }
};

ErrorStore._setErrors = function (form, errors) {
  _errors = errors;
  _form = form;
  this.__emitChange();
};

ErrorStore._clearErrors = function () {
  _errors = [];
  _form = '';
  this.__emitChange();
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      this._setErrors();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      this._clearErrors();
      break;
  }
};

module.exports = ErrorStore;
