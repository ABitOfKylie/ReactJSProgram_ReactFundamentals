var axios = require('axios');

var id = 'CLIENT_ID';
var secret = 'SECRET_ID';
var param = ''; // '?client_id='+id+'&client_secret='+sec';

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user_info) {
        return user_info.data;
      });
    }).catch(function(err) {
      console.warn('Error in GitHub API', err);
    });
  },
}

module.exports = helpers;
