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
    return({ liked_posts: SessionStore.currentUser().liked_posts });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onChange);
    PostActions.fetchAllPosts();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({ liked_posts: SessionStore.currentUser().liked_posts });
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
