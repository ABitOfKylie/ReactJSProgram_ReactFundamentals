var React = require('react');
var ReactDOM = require('react-dom');

var Prompt = require('../components/Prompt');

// Components
var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired,
	},
	getInitialState: function() {
		return {
			username: '',
		}
	},
	render: function() {
		return (
			<Prompt
				onSubmit={this.handleSubmit}
				onUpdate={this.handleUpdate}
				header={this.props.route.header}
				initialValue={this.state.username}
			/>
		)
	},
	handleUpdate: function(e) {
		this.setState({
			username: e.target.value,
		})
	},
	handleSubmit: function(e) {
		e.preventDefault();
		// Clear the state
		var username = this.state.username;
		this.setState({
			username: '',
		});

		if (this.props.routeParams.playerOne) {
			// Go to to battle
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username,
				},
			});
		} else {
			// Choose player 2
			this.context.router.push('/playerTwo/' + this.state.username);
		}
	},
});

module.exports = PromptContainer;
