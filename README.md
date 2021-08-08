# TwitchKeyGrab
A simple nodejs app that try to automatically grab steam keys in a twitch chat. 

#### built with
* [tmi.js](https://github.com/tmijs/tmi.js)
* [steam-user](https://github.com/DoctorMcKay/node-steam-user)
___________________________________________________

## Installation

* 1. clone this repository 

```
git clone https://github.com/0x6de/TwitchKeyGrab.git
```

run npm install inside the main folder to install dependencies
```
npm install
```

* 2. create a config.js file in main folder

#### config.js
```
module.exports = {
    accountName: 'YOUR_STEAM_ACCOUNT_NAME',
    password: 'YOUR_STEAM_ACCOUNT_PASSWORD'
}
```
Replace with your own steam credentials. 
_(works with steam guard too, you will be prompted to enter your steam guard code)_


## Usage 

run node app.js followed by a twitch channel parameter

```
node app.js your_twitch_channel
```

When a steam key is found in twitch chat, it will automatically try to redeem it on your steam account. (It will also write an entry in logs.txt)