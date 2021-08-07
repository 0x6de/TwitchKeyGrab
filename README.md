# TwitchKeyGrab
___________________________________________________

## Installation

clone this repository and run npm install

```
npm install
```

## config file:

* #### config.js
   steam account name and steam account password

```
module.exports = {
    accountName: 'YOUR_STEAM_ACCOUNT_NAME',
	password: 'YOUR_STEAM_ACCOUNT_PASSWORD'
}
```

## Usage 

run node app.js followed by a twitch channel parameter

```
node app.js your_twitch_channel
```

when a steam key is found in twitch chat, it will automatically try to redeem it on your steam account. (It will also write an entry in logs.txt)