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

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({ isUserLoggedIn: SessionStore.isUserLoggedIn() });
  },

  _handleLogout(e) {
    e.preventDefault();
    SessionActions.logout();
  },

  _handleLoginRedirect(e) {
    e.preventDefault();
    this.context.router.push('/login');
  },

  _handleSignupRedirect(e) {
    e.preventDefault();
    this.context.router.push('/signup');
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
      </div>
    );

    let loggedInHeader = (
      <header>
        <div className="greeting">{ SessionStore.currentUser() }</div>
        <button
          className="sub-buttons logout-button"
          onClick={this._handleLogout}>Log out</button>
      </header>
    );

    if (this.state.isUserLoggedIn) {
      signupDiv = '';
    } else {
      loggedInHeader = '';
    }

    return (
      <div>
        { loggedInHeader }
        { signupDiv }
        {this.props.children}
      </div>
    );
  }
});
