//WARNING! make sure you sudoed before executing this script!

var fs = require('fs')

var myarg = process.argv.slice(2)

const myprocess = process.cpuUsage();

const spawn = require('child_process').spawn;
const exec = require('child_process').exec;

const rmControlAccess1 = 'sudo rm -rf /Library/Managed\\ Preferences/com.apple.applicationaccess.plist';
const rmControlAccess2 = 'sudo rm -rf /Library/Managed\\ Preferences/com.apple.applicationaccess.new.plist';
const rmControlAccess3 = 'sudo rm -rf /Library/Managed\\ Preferences/*/com.apple.applicationaccess.new.plist';
const rmControlAccess4 = 'sudo rm -rf /Library/Managed\\ Preferences/*/com.apple.applicationaccess.plist';

const ps = spawn('ps', ['-ax']);
const grep = spawn('grep', ['parentalcontrolsd']); //if empty, no process running
const kill = 'sudo killall parentalcontrolsd';

// worst coding ever! :)
exec(rmControlAccess1, function (err, stdout, stderr) {
})

exec(rmControlAccess2, function (err, stdout, stderr) {
})	

exec(rmControlAccess3, function (err, stdout, stderr) {
})	

exec(rmControlAccess4, function (err, stdout, stderr) {
})	


ps.stdout.on('data', function (data) {
	grep.stdin.write(data);
})

ps.on('close', function (code) {
 	if (code !== 0) {
		console.log(`ps process exited with code ${code}`);
	}
	grep.stdin.end();
});

grep.stdout.on('data', function (data) {
	var temp = data.toString().split('\n');
	temp.forEach(function (elm) {

		if (elm.indexOf('FamilyControls.framework') >= 0){
			
			exec(kill, function (err, stdout, stderr) {
				console.log(stdout);
				console.log(stderr);
				console.log("ParentalControlSD CPU usage has been fixed!")
			})		
		}
	})
})
