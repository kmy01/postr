const React = require('react');
const PostActions = require('../../actions/post_actions');
const SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  getInitialState() {
    return {
      linkUrl: '',
      body: '',
      tags: ''
    };
  },

  componentDidMount() {
    //store listener
  },

  componentWillUnmount() {
    //remove listeners
  },

  _onSubmit(e) {
    e.preventDefault();
    const postData = new FormData();
    postData.append('post[author_id]', SessionStore.currentUser().id);
    postData.append('post[post_type]', 'link');
    postData.append('post[link_url]', this.state.linkUrl);
    postData.append('post[body]', this.state.body);
    postData.append('tags', this.state.tags);

    PostActions.createPost(postData);
    this.setState({ linkUrl: '', body: '', tags: '' });
    this.props._closeModal();
  },

  _onLinkChange(e) {
    this.setState({ linkUrl: e.target.value });
  },

  _onBodyChange(e) {
    this.setState({ body: e.target.value });
  },

  _onTagChange(e) {
    this.setState({ tags: e.target.value })
  },

  render() {
    return (
      <form className='link-form'>
        <input
          className='link-url-input'
          placeholder="Link"
          value={this.state.linkUrl}
          type="url"
          onChange={this._onLinkChange} />
        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />

        <input
          className='tag-input'
          placeholder='#tags'
          value={this.state.tags}
          type='text'
          onChange={this._onTagChange} />

        <div className='form-controls group'>
          <button
            className='form-button post-button'
            onClick={this._onSubmit}>Post</button>
          <button
            className='form-button close-button'
            onClick={this.props._closeModal}>Close</button>
        </div>
      </form>
    );
  }
});
