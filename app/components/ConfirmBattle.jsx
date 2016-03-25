var React = require('react');
var PropTypes = React.PropTypes;

var styles = require('../styles');

function ConfirmBattle(props) {
	if (props.isLoading === true) {
		return (
			<p>Loading ...</p>
		)
	} else {
		return (
			<p>Confirm Battle!</p>
		)
	}
}

module.exports = ConfirmBattle;
