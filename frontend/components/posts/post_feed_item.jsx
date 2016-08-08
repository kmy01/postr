const React = require('react');
const SessionStore = require('../../stores/session_store');
const PostConstants = require('../../constants/post_constants');

module.exports = React.createClass({
  _postToRender() {
    let post = this.props.post;
    let postRender;

    switch (post.post_type) {
      case PostConstants.TEXT:
        postRender = this._textPost(post);
        break;
      case PostConstants.PHOTO:
        postRender = this._photoPost(post);
        break;
      case PostConstants.LINK:
        postRender = this._linkPost(post);
        break;
      case PostConstants.AUDIO:
        postRender = this._audioPost(post);
        break;
      case PostConstants.VIDEO:
        postRender = this._videoPost(post);
        break;
    }

    return postRender;
  },

  _textPost(post) {
    return(
      <div className='post-feed-item-content'>
        <h2
          className='text-post-title'>{ post.title }</h2>
        <div
          className='post-body'>{ post.body }</div>
      </div>
    );
  },

  _photoPost(post) {
    return(
      <div className='post-feed-item-content'>
        <img
          className='photo-post' src={post.photo_url} />
        <div
          className='post-body'>{ post.body }</div>
      </div>
    );
  },

  _linkPost(post) {
    return(
      <div className='post-feed-item-content'>
        <a
          className='link-post'
          href={post.link_url}>{ post.link_url }</a>
        <div
          className='post-body'>{ post.body }</div>
      </div>
    );
  },

  _audioPost(post) {
    return(
      <div className='post-feed-item-content'>
        <audio
          className='audio-post'
          controls
          src={post.audio_url} />
        <div
          className='post-body'>{ post.body }</div>
      </div>
    );
  },

  _videoPost(post) {
    return(
      <div className='post-feed-item-content'>
        <video
          className='video-post'
          controls
          src={post.video_url} />
        <div
          className='post-body'>{ post.body }</div>
      </div>
    );
  },

  render() {
    const author = this.props.post.author;

    return(
      <div className='post-container group'>
        <img
          className='avatar'
          src={author.avatar_url} />
        <div className='post-feed-item'>
          <div className='post-feed-item-header'>
            { author.username }
          </div>

          { this._postToRender() }

          <div className='post-feed-item-footer'>
          </div>
        </div>
      </div>
    );
  }
});
