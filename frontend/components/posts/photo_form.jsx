const React = require('react');
const PostActions = require('../../actions/post_actions');
const SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  getInitialState() {
    return {
      body: '',
      mediaFile: '',
      photoUrl: ''
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
    postData.append('post[post_type]', 'photo');
    postData.append('post[body]', this.state.body);
    postData.append('post[media_content]', this.state.mediaFile);
    if (!this.state.mediaFile) {
      postData.append('post[photo_url]', this.state.photoUrl);
    }

    PostActions.createPost(postData);
    this.setState({
      body: '',
      mediaFile: '',
      photoUrl: ''
    });
  },

  _onBodyChange(e) {
    this.setState({ body: e.target.value });
  },

  _onFileChange(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        mediaFile: file,
        photoUrl: fileReader.result
      });
    };

    // fileReader.addEventListener('load', () => {
    //   this.setState({
    //     mediaFile: file,
    //     photoUrl: fileReader.result
    //   });
    // })
    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  _onUrlChange(e) {
    e.preventDefault();
    this.setState({ photoUrl: e.target.value })
    //listen for idle?
  },

  render() {
    return (
      <form className='photo-form'>
        <img
          className="preview"
          src={this.state.photoUrl} />

        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />
        <input
          type='file'
          onChange={this._onFileChange} />
        <input
          placeholder="Photo Url"
          type='url'
          onChange={this._onUrlChange} />

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
