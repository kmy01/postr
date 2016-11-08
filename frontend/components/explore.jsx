const React = require('react');
const Masonry = require('react-masonry-component');
const NavBar = require('./nav_bar');
const PostFormBar = require('./posts/post_form_bar');
const ExploreItem = require('./explore_item');

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
    PostActions.fetchAllPosts();
  },

  componentWillUnmount() {
    this.postListener.remove();
  },

  _onPostChange() {
    this.setState({ posts: PostStore.all() });
  },

  render() {
    function compare(a, b) {
      if (a.created_at > b.created_at) {
        return -1;
      } else if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    };

    let posts = this.state.posts.sort(compare);

    let postItems = posts.map((post) => {
      return(
        <li key={post.id}><ExploreItem
          post={post} /></li>
      );
    });

    return (
      <div>
        <header className='header-nav group'>
          <NavBar />
        </header>
        <main className='main'>
          <Masonry
            className={'explore'}
            elementType={'ul'}>
            { postItems }
          </Masonry>
        </main>
      </div>
    );
  }
});
