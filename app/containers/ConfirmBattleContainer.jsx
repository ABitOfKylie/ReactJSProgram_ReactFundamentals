var React = require('react');

var ConfirmBattle = require('../components/ConfirmBattle');

// Components
var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired,
	},
	getInitialState: function() {
		return {
			isLoading: true,
			playersInfo: [],
		};
	},
	componentWillMount: function() {
		console.log('Component Will Mount');
	},
	componentDidMount: function() {
		console.log('Component Did Mount');
		var query = this.props.location.query;
		// Update the state from somewhere
	},
	componentWillReceiveProps: function() {
		console.log('Component Will Receive Props');
	},
	componentWillUnmount: function() {
		console.log('Component Will Unmount');
	},
	render: function() {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
			/>
		)
	},
});

module.exports = ConfirmBattleContainer;
