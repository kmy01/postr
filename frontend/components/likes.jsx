const React = require('react');

const NavBar = require('./nav_bar');

const SessionStore = require('../stores/session_store');
const PostFeed = require('./posts/post_feed');

const PostStore = require('../stores/post_store');
const PostActions = require('../actions/post_actions');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({ liked_posts: PostStore.all() });
  },

  componentDidMount() {
    this.postListener = PostStore.addListener(this._onPostChange);
    PostActions.fetchAllPosts('likes');
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  _onPostChange() {
    this.setState({ liked_posts: PostStore.all() });
  },

  render() {
    return (
      <div>
        <header className='header-nav group'>
          <NavBar />
        </header>
        <main className='main'>
          <PostFeed posts={this.state.liked_posts}/>
        </main>
      </div>
    );
  }
});
