const React = require('react');

const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const PostFormBar = require('./posts/post_form_bar');
const NavBar = require('./nav_bar');

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

          <PostFeed />
        </main>
      </div>
    );
  }
});
