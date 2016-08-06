const React = require('react');
const PostActions = require('../../../actions/post_actions');
const SessionStore = require('../../../stores/session_store');

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
    debugger
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
      <form>
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
        <button
          onClick={this._onSubmit}>Post</button>
        <img
          className="preview"
          src={this.state.photoUrl} />
      </form>
    );
  }
});
