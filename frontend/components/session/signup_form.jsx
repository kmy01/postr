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
    let errorsList = this.state.errors.map((error, i) => {
      if (i === 0) {
        return <li key={i} style={{paddingTop: '10px'}}>{error}</li>;
      }
      return <li key={i}>{error}</li>;
    });

    return (
      <div>
        <header className="group">
          <button className="sub-buttons"
            onClick={this._handleLogin}>Log in</button>
        </header>

        <div className="main-form">
          <ul className="error-list">
            { errorsList }
          </ul>
          <form onSubmit={this._onSubmit}>
            <input
              className="form-field username-field"
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={this._onUsernameChange} />
            <input
              className="form-field password-field"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this._onPasswordChange} />
            <input
              className="main-buttons main-signup-button"
              type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    );
  }
});
