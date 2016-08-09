const React = require('react');
const SessionStore = require('../../stores/session_store');
const PostStore = require('../../stores/post_store');
const PostActions = require('../../actions/post_actions');
const PostFeedItem = require('./post_feed_item');

module.exports = React.createClass({
  getInitialState() {
    return({ posts: PostStore.all() });
  },

  componentDidMount() {
    this.postListener = PostStore.addListener(this._onPostChange);
    PostActions.fetchAllPosts();
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  _onPostChange() {
    this.setState({ posts: PostStore.all() });
  },

  render() {
    let postItems = this.state.posts.map((post) => {
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
