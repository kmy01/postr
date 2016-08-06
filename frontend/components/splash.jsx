const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { isUserLoggedIn: SessionStore.isUserLoggedIn() };
  },

  componentWillMount() {
    document.body.classList.add('splash');
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({ isUserLoggedIn: SessionStore.isUserLoggedIn() });
    if (SessionStore.isUserLoggedIn()) {
      document.body.classList.remove('splash');
      this.context.router.push('/dashboard');
    }
  },

  _handleLoginRedirect(e) {
    e.preventDefault();
    this.context.router.push('/login');
  },

  _handleSignupRedirect(e) {
    e.preventDefault();
    this.context.router.push('/signup');
  },

  _handleGuestLogin(e) {
    e.preventDefault();
    const guestData = { username: 'guest', password: 'password123' }
    SessionActions.login(guestData);
  },

  render() {
    let signupDiv = (
      <div className="main-login-signup-div">
        <button
          className="main-buttons main-login-button"
          onClick={this._handleLoginRedirect}>Log in</button>
        <button
          className="main-buttons main-signup-button"
          onClick={this._handleSignupRedirect}>Sign up</button>
        <button
          className="main-buttons guest-button"
          onClick={this._handleGuestLogin}>Guest Log in</button>
      </div>
    );

    return (
      <div>
        { signupDiv }

        {this.props.children}
      </div>
    );
  }
});
