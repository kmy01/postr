const React = require('react');
const PostFormBar = require('./posts/post_form_bar');
const NavBar = require('./nav_bar');

const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const TextForm = require('./posts/text_form/text_form');
const PhotoForm = require('./posts/photo_form/photo_form');
const LinkForm = require('./posts/link_form/link_form');
const AudioForm = require('./posts/audio_form/audio_form');
const VideoForm = require('./posts/video_form/video_form');

const PostFeed = require('./posts/post_feed');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  render() {
    return (
      <div>
        <header className='header-nav group'>
          <NavBar />
        </header>
        <main className='main'>
          <PostFormBar />
          <TextForm />
          <PhotoForm />
          <LinkForm />
          <AudioForm />
          <VideoForm />
          <PostFeed />
        </main>
      </div>
    );
  }
});
