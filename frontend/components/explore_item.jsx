const React = require('react');
const SessionStore = require('../stores/session_store');
const PostConstants = require('../constants/post_constants');

const LikeActions = require('../actions/like_actions');
const FollowActions = require('../actions/follow_actions');

module.exports = React.createClass({
  getInitialState() {
    const currentUser = SessionStore.currentUser();
    const likers = this.props.post.likes.map((like) => {
      return like.user_id;
    });
    const followers = this.props.post.author.followers;

    return {
      currentUser: currentUser,
      likedByUser: likers.includes(currentUser.id),
      followByUser: followers.includes(currentUser.id)
    };
  },

  componentWillReceiveProps(newProps) {
    const currentUser = SessionStore.currentUser();
    const likers = newProps.post.likes.map((like) => {
      return like.user_id;
    });
    const followers = this.props.post.author.followers;

    this.setState({
      likedByUser: likers.includes(this.state.currentUser.id),
      followByUser: followers.includes(currentUser.id)
    });
  },

  _findLikeId() {
    const likes = this.props.post.likes;
    const postId = this.props.post.id;
    const userId = this.state.currentUser.id;
    let likeId;

    likes.forEach((like) => {
      if (like.post_id === postId && like.user_id === userId ) {
        likeId = like.id;
      }
    });

    return likeId;
  },

  _handleLike() {
    if (this.state.likedByUser) {
      LikeActions.deleteLike(this._findLikeId());
    } else {
      let likeData = {
        like: {
          post_id: this.props.post.id,
        }
      }
      LikeActions.createLike(likeData);
    }
  },

  _likeRender() {
    if (this.state.likedByUser) {
      return <button
        className='like-button like-fill'
        onClick={this._handleLike} />;
    } else {
      return <button
        className='like-button'
        onClick={this._handleLike} />;
    }
  },

  _handleFollow() {
    let followData = {
      follow: {
        followee_id: this.props.post.author.id
      }
    };

    if (this.state.followByUser) {
      FollowActions.deleteFollow(followData);
    } else {
      FollowActions.createFollow(followData);
    }
  },

  _followText() {
    if (this.state.currentUser.id === this.props.post.author.id) {
      return '';
    } else if (this.state.followByUser) {
      return 'Unfollow';
    } else {
      return 'Follow';
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

  _tagsToRender() {
    return this.props.post.tags.map((tag) => {
      return (
        <li key={tag}><a href={`/tagged/${tag}`}>{ '#' + tag }</a></li>
      );
    });
  },

  _textPost(post) {
    return(
      <div className='explore-item-content'>
        <h2
          className='explore-text-title'>{ post.title }</h2>
        <div
          className='explore-body'>{ post.body }</div>
      </div>
    );
  },

  _photoPost(post) {
    return(
      <div className='explore-item-content'>
        <img
          className='explore-photo' src={post.photo_url} />
        <div
          className='explore-body'>{ post.body }</div>
      </div>
    );
  },

  _linkPost(post) {
    return(
      <div className='explore-item-content'>
        <div className='explore-link'>
          <a
            href={post.link_url}>{ post.link_url }</a>
        </div>
        <div
          className='explore-body'>{ post.body }</div>
      </div>
    );
  },

  _audioPost(post) {
    return(
      <div className='explore-item-content'>
        <audio
          className='explore-audio'
          controls
          src={post.audio_url} />
        <div
          className='explore-body'>{ post.body }</div>
      </div>
    );
  },

  _videoToRender() {
    const videoUrl = this.props.post.video_url;
    let videoRender;

    if (videoUrl.includes('youtube') || videoUrl.includes('vimeo')) {
      videoRender = (
        <iframe
          className='explore-video'
          src={videoUrl}
          frameBorder="0"
          allowFullScreen></iframe>
      );
    } else {
      videoRender = (
        <video
          className='explore-video'
          controls
          src={videoUrl} />
      );
    }

    return videoRender;
  },

  _videoPost(post) {
    return(
      <div className='explore-item-content'>
        { this._videoToRender() }
        <div
          className='explore-body'>{ post.body }
        </div>
      </div>
    );
  },

  render() {
    const author = this.props.post.author;
    return(
      <div className='explore-container group'>
        <div className='exlore-item'>
          <div className='explore-item-header group'>
            <img
              className='explore-avatar'
              src={author.avatar_url} />
            <a href='#'>{ author.username }</a>
            <button
              className='explore-header-follow'
              onClick={this._handleFollow}>{ this._followText() }</button>
          </div>

          { this._postToRender() }

          <ul className='explore-tags'>
            { this._tagsToRender() }
          </ul>

          <div className='explore-item-footer group'>
            { this._likeRender() }
          </div>
        </div>
      </div>
    );
  }
});
