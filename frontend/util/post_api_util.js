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

  createPost(post, successCb, errorCb) {
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: {post: post},
      success(resp) {
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  },

  updatePost(post, successCb, errorCb) {
    $.ajax({
      url: `/api/posts/${post.id}`,
      method: 'PATCH',
      data: {post: post},
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
        successCb(resp);
      },
      error(resp) {
        errorCb(resp);
      }
    });
  }
};
