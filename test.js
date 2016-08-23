var fs = require('fs');

const exec = require('child_process').exec;


exec('sudo ls', function (err, stdout, stderr) {
	console.log(stdout.toString());
})

exec('sudo ls', function (err, stdout, stderr) {
	console.log(stdout.toString());
})