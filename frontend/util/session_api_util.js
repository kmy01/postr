module.exports = {
  signup(userData, successCb, errorCb) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user: userData },
      success(resp) {
        console.log('success Sign up');
        successCb(resp);
      },
      error(resp) {
        errorCb(resp.responseJSON);
      }
    });
  },

  login(userData, successCb, errorCb) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user: userData },
      success(resp) {
        console.log('success Log in');
        successCb(resp);
      },
      error(resp) {
        errorCb(resp.responseJSON);
      }
    });
  },

  logout(successCb, errorCb) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success(resp) {
        console.log('success Log out');
        successCb(resp);
      },
      error(resp) {
        errorCb(resp.responseJSON);
      }
    });
  }
};
