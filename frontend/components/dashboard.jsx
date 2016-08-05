const React = require('react');
const PostFormBar = require('./posts/post_form_bar');
const NavBar = require('./nav_bar');

const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const TextForm = require('./posts/text_form/text_form');
const PhotoForm = require('./posts/photo_form/photo_form');

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

  _onChange() {
    if (!SessionStore.isUserLoggedIn()) {
      this.context.router.push('/');
    }
  },

  _handleLogout(e) {
    e.preventDefault();
    SessionActions.logout();
  },

  _loggedInHeader() {
    return (
      <header>
        <div className="greeting">{ SessionStore.currentUser }</div>
        <button
          className="sub-buttons logout-button"
          onClick={this._handleLogout}>Log out</button>
      </header>
    );
  },
  render() {
    return (
      <div>
        { this._loggedInHeader() }
        <NavBar />
        <PostFormBar />
        <br/>
        <TextForm />
        <br/>
        <PhotoForm />
      </div>
    );
  }
});
