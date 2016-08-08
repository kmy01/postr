const React = require('react');
const PostActions = require('../../actions/post_actions');
const SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  getInitialState() {
    let textPostData = {
      title: '',
      body: ''
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

    PostActions.createPost(postData);
    this.setState({ title: '', body: '' });
  },

  _onTitleChange(e) {
    this.setState({title: e.target.value});
  },

  _onBodyChange(e) {
    this.setState({body: e.target.value});
  },

  render() {
    return (
      <form className='text-form'>
        <input
          placeholder="Title"
          value={this.state.title}
          type="text"
          onChange={this._onTitleChange} />
        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />
        
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
