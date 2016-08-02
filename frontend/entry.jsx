const React = require('react');
const ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.render();
});

// $.ajax({
//   url: '/api/users',
//   method: 'POST',
//   data: {user: {username: 'one', password: 'password123'}},
//   success(resp) {
//     console.log('success');
//   }
// })

// $.ajax({
//   url: '/api/session',
//   method: 'POST',
//   data: {user: {username: 'one', password: 'password123'}},
//   success(resp) {
//     console.log('success');
//   }
// })

$.ajax({
  url: '/api/session',
  method: 'DELETE',
  success(resp) {
    console.log('success');
  }
})
