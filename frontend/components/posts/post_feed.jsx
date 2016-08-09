const React = require('react');

const PostFeedItem = require('./post_feed_item');

module.exports = React.createClass({
  render() {
    let postItems = this.props.posts.reverse().map((post) => {
      return(
        <li key={post.id}><PostFeedItem
          post={post} /></li>
      );
    });

    return(
      <ul className='post-feed group'>
        { postItems }
      </ul>
    );
  }
});
