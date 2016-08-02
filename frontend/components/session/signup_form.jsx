const React = require('react');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { username: '', password: '' };
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onChange)
  },

  _onChange() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push('/');
    }
  },

  _onSubmit() {
    const userData = this.state;
    SessionActions.signup(userData);
    //need to error out
    SessionActions.login(userData);
    this.setState({ username: '', password: '' });
  },

  _onUsernameChange(e) {
    this.setState({ username: e.target.value });
  },

  _onPasswordChange(e) {
    this.setState({ password: e.target.value });
  },

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <input
          placeholder="Username"
          type="text"
          value={this.state.username}
          onChange={this._onUsernameChange} />
        <input
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={this._onPasswordChange} />
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
});
