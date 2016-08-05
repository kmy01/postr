const React = require('react');
const PostActions = require('../../../actions/post_actions');

module.exports = React.createClass({
  getInitialState() {
    return {
      body: '',
      mediaFile: undefined,
      photoUrl: undefined
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
    postData.append('post[author_id]', window.currentUser.id);
    postData.append('post[post_type]', 'photo');
    postData.append('post[body]', this.state.body);
    postData.append('post[media_content]', this.state.mediaFile);

    PostActions.createPost(postData);
    this.setState({
      body: '',
      mediaFile: undefined,
      photoUrl: undefined
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

  render() {
    return (
      <form>
        <textarea
          value={this.state.body}
          onChange={this._onBodyChange} />
        <input
          type='file'
          onChange={this._onFileChange} />
        <button
          onClick={this._onSubmit}>Post</button>
        <img
          className="img-preview"
          src={this.state.photoUrl} />
      </form>
    );
  }
});
