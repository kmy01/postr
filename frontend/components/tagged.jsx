const React = require('react');

const NavBar = require('./nav_bar');
const PostFeed = require('./posts/post_feed');

const PostStore = require('../stores/post_store');
const PostActions = require('../actions/post_actions');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({ posts: PostStore.all() });
  },

  componentDidMount() {
    this.listener = PostStore.addListener(this._onChange);
    PostActions.fetchTaggedPosts(this.props.params.tagName);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({ posts: PostStore.all() });
  },

  render() {
    return (
      <div>
        <header className='header-nav group'>
          <NavBar />
        </header>
        <main className='main'>
          <PostFeed posts={this.state.posts}/>
        </main>
      </div>
    );
  }
});
