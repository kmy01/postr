const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
  render() {
    return(
      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
});
