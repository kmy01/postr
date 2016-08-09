module.exports = {
  createLike(likeData, successCb, errorCb) {
    $.ajax({
      url: '/api/likes',
      method: 'POST',
      data: likeData,
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  deleteLike(id, successCb, errorCb) {
    $.ajax({
      url: `/api/likes/${id}`,
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
