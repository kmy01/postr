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

  deleteFollow(id, successCb, errorCb) {
    $.ajax({
      url: `/api/follows/${id}`,
      method: 'DELETE',
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  }
};
