var React = require('react');

// Components
var Main = React.createClass({
  render: function() {
    return (
      <div className='mainContainer'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
