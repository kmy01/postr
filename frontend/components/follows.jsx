const React = require('react');

const NavBar = require('./nav_bar');
const SessionStore = require('../stores/session_store');
const FollowActions = require('../actions/follow_actions');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({ followees: SessionStore.currentUser().followees });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onChange() {
    this.setState({ followees: SessionStore.currentUser().followees });
  },

  _handleUnFollow(followeeId) {
    let followData = {
      follow: {
        followee_id: followeeId
      }
    };

    FollowActions.deleteFollow(followData);
  },

  _followItems() {
    return this.state.followees.map((followee) => {
      return (
        <li key={followee.id} className='followee-item group'>
          <img
            className='followee-avatar'
            src={followee.avatar_url} />
          <a
            className='followee-link'
            href='#'>{ followee.username }</a>
          <div className='unfollow-button-wrapper'>
            <button
              className="unfollow-button"
              onClick={this._handleUnFollow.bind(this, followee.id)}>
              Unfollow
            </button>
          </div>
        </li>
      );
    });
  },

  render() {
    return (
      <div>
        <header className='header-nav group'>
          <NavBar />
        </header>
        <main className='main'>
          <div className='follows-feed'>
            <ul className='follows-container group'>
              <li className='follows-title'>
                Following { this.state.followees.length } on postr.
              </li>
              { this._followItems() }
            </ul>
          </div>
        </main>
      </div>
    );
  }
});
