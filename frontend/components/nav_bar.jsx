const React = require('react');

const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

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

  render() {
    return (
      <nav className='nav-bar group'>
        <div className='logo'><a href='/'>postr</a></div>

        <ul className='nav-list'>
          <li><a href='/dashboard'>Home</a></li>
          <li><a href='/explore'>Explore</a></li>
          <li className='account'>
            <div>Account</div>
            <ul className='account-list'>
              <li>{ SessionStore.currentUser().username }</li>
              <li><a href='/likes'>Likes</a></li>
              <li><a href='/following'>Following</a></li>
              <li onClick={this._handleLogout}>Logout</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
});
