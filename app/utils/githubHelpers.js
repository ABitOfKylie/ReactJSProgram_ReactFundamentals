var axios = require('axios');

var id = 'CLIENT_ID';
var secret = 'SECRET_ID';
var param = ''; // '?client_id='+id+'&client_secret='+sec';

function getUserInfo(username) {
  axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      console.log('GitHub: ',info);
    });
  },
}

module.exports = helpers;
