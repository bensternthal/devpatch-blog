/* Example usage fly production */

var plan = require('flightplan');
var deploy = require('./deploy');

// run commands on localhost
plan.target('production', [
  {
    host: deploy.host,
    username: deploy.username,
    agent: process.env.SSH_AUTH_SOCK,
    path: deploy.path
  }
]);

plan.local(function(local) {
  var rsyncPath = deploy.username + "@" + deploy.host + ":" + deploy.path;

  local.log('Build Site Using Wintersmith');
  local.exec('wintersmith build');

  local.log('SCP Files');
  local.exec('rsync -avc --delete build/ ' + rsyncPath);
});
