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

  _toDisplay() {
    if (this.state.isUserLoggedIn) {
      return (
        <div>
          { SessionStore.currentUser() }
          <button onClick={this._handleLogout}>Logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  },

  render() {
    return(
      <div>
        <header>
          { this._toDisplay() }
        </header>
        {this.props.children}
      </div>
    );
  }
});
