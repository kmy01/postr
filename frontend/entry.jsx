const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');

const App = require('./components/app');
const LoginForm = require('./components/session/login_form');
const SignupForm = require('./components/session/signup_form');


const _ensureLoggedIn = function (nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
}

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      
    </Route>
    <Route path='/login' component={LoginForm} />
    <Route path='/signup' component={SignupForm} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(router, document.getElementById('root'));
});

// const SessionApiUtil = require('./util/session_api_util');
// window.SessionApiUtil = SessionApiUtil;

// const SessionActions = require('./actions/session_actions');
// window.SessionActions = SessionActions;
