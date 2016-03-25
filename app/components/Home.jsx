var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');

// Components
var Home = React.createClass({
	render: function() {
		return (
			<div className='jumbotron col-sm-12 text-center'>
				<h1>Github Battle</h1>
				<p className='lead'>Motto über alles</p>
				<Link to='/playerOne'>
					<button className='button' className='btn btn-lg btn-success'>Start</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;
