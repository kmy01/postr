const React = require('react');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { username: '', password: '', errors: []};
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
    this.errorListener = ErrorStore.addListener(this._handleError);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  _handleError() {
    const form = this.props.location.pathname.slice(1);
    this.setState({ errors: ErrorStore.errors(form)})
  },

  _onChange() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push('/');
    }
  },

  _onSubmit() {
      const userData = this.state;
      SessionActions.signup(userData);
      // SessionActions.login(userData);
      // this.setState({ username: '', password: '' });
  },

  _handleLogin(e) {
    e.preventDefault();
    this.context.router.push('/login')
  },

  _onUsernameChange(e) {
    this.setState({ username: e.target.value });
  },

  _onPasswordChange(e) {
    this.setState({ password: e.target.value });
  },

  render() {
    return (
      <div>
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
          <input
            className="main-buttons"
            type="submit" value="Sign Up" />
        </form>
        <button className="sub-buttons"
          onClick={this._handleLogin}>Login</button>

        {this.state.errors}
      </div>
    );
  }
});
