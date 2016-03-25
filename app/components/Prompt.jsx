var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var styles = require('../styles');

var Prompt = React.createClass({
	propTypes: {
		header: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired,
		onUpdate: PropTypes.func.isRequired,
	},
	render: function() {
		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
				<h1>{this.props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={this.props.onSubmit}>
						<div className="form-group">
							<input
								className="form-control"
								placeholder="GitHub Username"
								type="text"
								onChange={this.props.onUpdate}
								value={this.props.initialValue}
							/>
						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
							<button
								className="btn btn-block btn-success"
								type="submit"
							>
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Prompt;
