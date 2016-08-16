module.exports = {
  signup(userData, successCb, errorCb) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user: userData },
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp.responseJSON, 'signup');
      }
    });
  },

  login(userData, successCb, errorCb) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user: userData },
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp.responseJSON, 'login');
      }
    });
  },

  logout(successCb, errorCb) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp.responseJSON, 'logout');
      }
    });
  }
};
