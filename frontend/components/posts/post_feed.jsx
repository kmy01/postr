const React = require('react');

const PostFeedItem = require('./post_feed_item');

module.exports = React.createClass({
  render() {
    function compare(a, b) {
      if (a.created_at > b.created_at) {
        return -1;
      } else if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    };

    let posts = this.props.posts.sort(compare);

    let postItems = posts.map((post) => {
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
