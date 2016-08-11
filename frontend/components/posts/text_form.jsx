const React = require('react');
const PostActions = require('../../actions/post_actions');
const SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  getInitialState() {
    let textPostData = {
      title: '',
      body: '',
      tags: ''
    };

    return textPostData;
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
    postData.append('post[post_type]', 'text');
    postData.append('post[title]', this.state.title);
    postData.append('post[body]', this.state.body);
    postData.append('tags', this.state.tags);

    PostActions.createPost(postData);
    this.setState({ title: '', body: '' });
    this.props._closeModal();
  },

  _onTitleChange(e) {
    this.setState({ title: e.target.value });
  },

  _onBodyChange(e) {
    this.setState({ body: e.target.value });
  },

  _onTagChange(e) {
    this.setState({ tags: e.target.value })
  },

  render() {
    return (
      <form className='text-form'>
        <input
          className='text-title'
          placeholder='Title'
          value={this.state.title}
          type='text'
          onChange={this._onTitleChange} />
        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />
        <input
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
