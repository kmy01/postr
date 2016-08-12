const React = require('react');

const NavBar = require('./nav_bar');
const PostFormBar = require('./posts/post_form_bar');

const PostFeed = require('./posts/post_feed');
const PostStore = require('../stores/post_store');
const PostActions = require('../actions/post_actions');

const SessionStore = require('../stores/session_store');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({ posts: PostStore.all() });
  },

  componentDidMount() {
    this.postListener = PostStore.addListener(this._onPostChange);
    PostActions.fetchAllPosts('dashboard');
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  _onPostChange() {
    this.setState({ posts: PostStore.all() });
  },

  render() {
    return (
      <div>
        <header className='header-nav group'>
          <NavBar />
        </header>
        <main className='main'>
          <PostFormBar />

          <PostFeed posts={this.state.posts}/>
        </main>
      </div>
    );
  }
});
