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

  _toDisplay() {
    if (this.state.isUserLoggedIn) {
      return (
        <div>
          { SessionStore.currentUser() }
          <button
            className="sub-buttons logout-button"
            onClick={this._handleLogout}>Logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <button
            className="main-buttons main-login-button"
            onClick={this._handleLoginRedirect}>Login</button>
          <button
            className="main-buttons main-signup-button"
            onClick={this._handleSignupRedirect}>Signup</button>
        </div>
      );
    }
  },

  render() {
    return(
      <div className="main-login-signup-div">
        <header>
        </header>
        { this._toDisplay() }
        {this.props.children}
      </div>
    );
  }
});
