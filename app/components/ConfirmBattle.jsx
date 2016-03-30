var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				<h1>Confirm Players</h1>
				<div className="col-sm-8 col-sm-offset-2">
					<div className="col-sm-6">
						<p className="lead">Player 1</p>
            {puke(props.playersInfo[0])}
					</div>
					<div className="col-sm-6">
						<p className="lead">Player 2</p>
            {puke(props.playersInfo[1])}
						</div>
				</div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12">
            <button type='button' className='btn btn-lg btn-success' onClick={props.onConfirm}>
              Fight!
            </button>
          </div>
          <div className="col-sm-12">
            <Link to='/playerOne'>
              <button className="btn btn-lg btn-danger">
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
