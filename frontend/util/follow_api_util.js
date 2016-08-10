module.exports = {
  createFollow(followData, successCb, errorCb) {
    $.ajax({
      url: '/api/follows',
      method: 'POST',
      data: followData,
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  deleteFollow(followData, successCb, errorCb) {
    $.ajax({
      url: `api/follows`,
      method: 'DELETE',
      data: followData,
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  }
};
