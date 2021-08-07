# TwitchKeyGrab
___________________________________________________

## Installation

clone this repository and run npm install

```
npm install
```

create a config.js file in main folder
* #### config.js
```
module.exports = {
    accountName: 'YOUR_STEAM_ACCOUNT_NAME',
	password: 'YOUR_STEAM_ACCOUNT_PASSWORD'
}
```
Replace with your own steam credentials


## Usage 

run node app.js followed by a twitch channel parameter

```
node app.js your_twitch_channel
```

When a steam key is found in twitch chat, it will automatically try to redeem it on your steam account. (It will also write an entry in logs.txt)