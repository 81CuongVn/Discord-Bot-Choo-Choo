const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const serverID = process.env.SERVERID;
const channelID = process.env.CHANNELID;

console.log('Beep beep! 🤖');

const Discord = require('discord.js');
const client = new Discord.Client();
// I recommend using dotenv, you can see how the project is setup here: 
// https://github.com/CodingTrain/Discord-Bot-Choo-Choo
// dotenv will be covered in a future video
client.login(process.env.TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('💖');
}

const replies = [
  '🚂🌈💖',
  'Choo choo!',
  'Ding! 🛎',
  'Never forget this dot!'
]

client.on('message', gotMessage);

function gotMessage(msg) {
  if (msg.guild.id === serverID && msg.channel.id === channelID) {
    if (msg.content === '!choochoo') {
      const index = Math.floor(Math.random() * replies.length);
      msg.channel.send(replies[index]);
    }
  }
}
