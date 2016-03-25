var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var styles = require('../styles');

function Prompt(props) {
	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmit}>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="GitHub Username"
							type="text"
							onChange={props.onUpdate}
							value={props.initialValue}
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
};

Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	initialValue: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
};


module.exports = Prompt;
