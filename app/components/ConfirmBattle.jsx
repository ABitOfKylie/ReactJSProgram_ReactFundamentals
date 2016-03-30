var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

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
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				<h1>Confirm Players</h1>
				<div className="col-sm-8 col-sm-offset-2">
					<UserDetailsWrapper>
						<UserDetails info={props.playersInfo[0]} header='Player 1'/>
					</UserDetailsWrapper>
					<UserDetailsWrapper>
						<UserDetails info={props.playersInfo[1]} header='Player 2'/>
					</UserDetailsWrapper>
				</div>
				<div className="col-sm-8 col-sm-offset-2">
					<div className="col-sm-3 col-sm-offset-3">
						<button type='button' className='btn btn-lg btn-success' onClick={props.onConfirm} style={styles.spacing}>
							Fight!
						</button>
					</div>
					<div className="col-sm-3">
						<Link to='/playerOne'>
							<button className="btn btn-lg btn-danger" style={styles.spacing}>
								Select other Players
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onConfirm: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired,
};

module.exports = ConfirmBattle;
