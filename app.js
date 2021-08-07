const tmi = require('tmi.js');
const SteamUser = require('steam-user');
const fs = require('fs');
const config = require('./config');

const clientSteam = new SteamUser();

var myArgs = process.argv.slice(2);
console.log('Twitch channel parameter: ', myArgs);
const SteamKey = new RegExp('((?![^0-9]{12,}|[^A-z]{12,})([A-z0-9]{4,5}-?[A-z0-9]{4,5}-?[A-z0-9]{4,5}(-?[A-z0-9]{4,5}(-?[A-z0-9]{4,5})?)?))');

const logInOptions = {
	accountName: config.accountName,
	password: config.password,
    autoRelogin: true
};

const client = new tmi.Client({
	channels: [ myArgs[0] ],
    connection: {reconnect: true}
});

clientSteam.logOn(logInOptions);

clientSteam.on('loggedOn', () => {
	console.log('Steam connected');
    client.connect();
});

client.on('connected', () => {
    console.log("Twitch chat connected");
})

client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);
    if (SteamKey.test(message)) {
        var key = message.match(SteamKey)
        console.log("STEAM KEY DETECTED: " + message + "\nKey: " + key[0])
        clientSteam.redeemKey(key[0], function (err) {
            if (err) {
                console.log("INVALID KEY OR ALREADY REDEEMED")
            }else {
                console.log("KEY ACTIVATED");
                time = new Date();
                fs.appendFile('logs.txt', '\nKey activated with success: ' + key[0] + ' || ' + time, function (err) {
                    if (err) throw err;
                    console.log('logs.txt updated');
                 });
            }
        })
    }
});
		