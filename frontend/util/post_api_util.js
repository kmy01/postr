module.exports = {
  fetchAllPosts(successCb, errorCb) {
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  fetchTaggedPosts(tagName, successCb, errorCb) {
    $.ajax({
      url: '/api/tags',
      method: 'GET',
      data: { tag: tagName },
      success(resp) {
        debugger
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  fetchSinglePost(id, successCb, errorCb) {
    $.ajax({
      url: `/api/posts/${id}`,
      method: 'GET',
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  createPost(postData, successCb, errorCb) {
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: postData,
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  updatePost(postData, successCb, errorCb) {
    $.ajax({
      url: `/api/posts/${postData.id}`,
      method: 'PATCH',
      data: postData,
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  deletePost(id, successCb, errorCb) {
    $.ajax({
      url: `/api/posts/${id}`,
      method: 'DELETE',
      success(resp) {
        successCb(id);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  }
};
