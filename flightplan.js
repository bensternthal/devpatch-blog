var Flightplan = require('flightplan');
var deploy = require('./deploy');

var plan = new Flightplan();
// configuration
plan.briefing({
  debug: true
});

// run commands on localhost
plan.local(function(local) {
  var rsyncPath = deploy.username + "@" + deploy.host + ":" + deploy.path;

  local.log('Build Site Using Wintersmith');
  local.exec('wintersmith build')

  local.log('SCP Files');
  local.exec('rsync -avc --delete build/ ' + rsyncPath);

});


// executed if flightplan succeeded
plan.success(function() {
  console.log('Success');
});

// executed if flightplan failed
plan.disaster(function() {
  console.log('Disaster');
});

plan.debriefing(function() {
  console.log('Exiting ');
});
