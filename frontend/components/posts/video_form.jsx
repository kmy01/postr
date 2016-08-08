const React = require('react');
const PostActions = require('../../../actions/post_actions');
const SessionStore = require('../../../stores/session_store');

module.exports = React.createClass({
  getInitialState() {
    return {
      body: '',
      mediaFile: '',
      videoUrl: ''
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
    postData.append('post[post_type]', 'video');
    postData.append('post[body]', this.state.body);
    postData.append('post[media_content]', this.state.mediaFile);
    if (!this.state.mediaFile) {
      postData.append('post[video_url]', this.state.videoUrl);
    }

    PostActions.createPost(postData);
    this.setState({
      body: '',
      mediaFile: '',
      videoUrl: ''
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
        videoUrl: fileReader.result
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
    this.setState({ videoUrl: e.target.value })
  },

  render() {
    return (
      <form className='video-form'>
        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />
        <input
          type='file'
          onChange={this._onFileChange} />
        <input
          placeholder="Video Url"
          type='url'
          onChange={this._onUrlChange} />
        <button
          onClick={this._onSubmit}>Post</button>
        <video
          className="preview"
          controls
          src={this.state.videoUrl} />
        <iframe
          width="640" height="360"
          src={this.state.videoUrl}
          frameborder="0"
          allowfullscreen></iframe>

      </form>
    );
  }
});
