const React = require('react');
const SessionStore = require('../../stores/session_store');
const PostConstants = require('../../constants/post_constants');

const LikeActions = require('../../actions/like_actions');
const LikeStore = require('../../stores/like_store');

module.exports = React.createClass({
  getInitialState() {
    const currentUser = SessionStore.currentUser();
    const likers = this.props.post.likes.map((like) => {
      return like.user_id;
    });

    return {
      currentUser: currentUser,
      likedByUser: likers.includes(currentUser.id)
    };
  },

  componentDidMount() {
  },

  componentWillUnMount() {
  },

  _findLikeId() {
    const likes = this.props.post.likes;
    const postId = this.props.post.id;
    const userId = this.state.currentUser.id;
    let likeId;

    Object.keys(this.props.post.likes).forEach((id) => {
      if (likes[id].post_id === postId && likes[id].user_id === userId ) {
        likeId = id;
      }
    });

    return likeId;
  },

  _handleLike() {
    if (this.state.likedByUser) {
      LikeActions.deleteLike(this._findLikeId());
      this.setState({
        likedByUser: false
      });
    } else {
      let likeData = {
        like: {
          post_id: this.props.post.id,
        }
      }
      LikeActions.createLike(likeData);
      this.setState({
        likedByUser: true
      });
    }
  },

  _likeText() {
    if (this.state.likedByUser) {
      return 'UnLike';
    } else {
      return 'Like';
    }
  },

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
        <div className='link-post'>
          <a
            href={post.link_url}>{ post.link_url }</a>
        </div>
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
        <iframe
          className='video-post'
          src={post.video_url}
          frameBorder="0"
          allowFullScreen></iframe>

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
            <button
              onClick={this._handleLike}>{ this._likeText() }</button>
          </div>
        </div>
      </div>
    );
  }
});
