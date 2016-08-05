const React = require('react');
const PostFormBar = require('./posts/post_form_bar');
const NavBar = require('./nav_bar');

const TextForm = require('./posts/text_form/text_form');
const PhotoForm = require('./posts/photo_form/photo_form');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <PostFormBar />
        <br/>
        <TextForm />
        <br/>
        <PhotoForm />
      </div>
    );
  }
});
