const React = require('react');
const PostActions = require('../../../actions/post_actions');
const SessionStore = require('../../../stores/session_store');

module.exports = React.createClass({
  getInitialState() {
    return {
      linkUrl: '',
      body: ''
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

    PostActions.createPost(postData);
    this.setState({ linkUrl: '', body: '' });
  },

  _onLinkChange(e) {
    this.setState({ linkUrl: e.target.value });
  },

  _onBodyChange(e) {
    this.setState({ body: e.target.value });
  },

  render() {
    return (
      <form className='link-form'>
        <input
          placeholder="Link"
          value={this.state.linkUrl}
          type="url"
          onChange={this._onLinkChange} />
        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />
        <button
          onClick={this._onSubmit}>Post</button>
      </form>
    );
  }
});
