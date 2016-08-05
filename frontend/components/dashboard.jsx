const React = require('react');
const PostFormBar = require('./posts/post_form_bar');
const NavBar = require('./nav_bar');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <PostFormBar />
      </div>
    );
  }
});
