var React = require('react');
var PropTypes = React.PropTypes;

var styles = require('../styles');

function puke(obj) {
	return (
		<pre>{JSON.stringify(obj, null, ' ')}</pre>
	);

}

function ConfirmBattle(props) {
	if (props.isLoading === true) {
		return (
			<p>Loading ...</p>
		);
	} else {
		return (
			<div>Confirm Battle!: {puke(props)}</div>
		);
	}
}

module.exports = ConfirmBattle;
