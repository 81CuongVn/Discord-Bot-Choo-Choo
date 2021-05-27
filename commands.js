// Command Handler
// Discord Bots
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/bots/discord/06-command-handler.html
// https://youtu.be/B60Q74FHFBQ

const gif = require("./commands-tutorials/gif.js");
const choochoo = require("./commands-tutorials/choochoo.js");
const randomwalk = require("./commands-tutorials/randomwalk.js");
const find = require("./commands-book/getPosition.js");
const assign = require("./commands-book/assignNumber.js");
const getnumber = require("./commands-book/getNumber.js");
const userdb = require("./commands-book/getUserDB.js");
const supporterdb = require("./commands-book/getSupporterDB.js");
const mynumber = require("./commands-book/getOwnNumber.js");
const set = require("./commands-book/setOwnNumber.js");
const help = require("./utils/help.js")
const easteregg = require("./commands-easteregg/easterEgg.js")
const random = require("./commands-book/randomNumber.js")
const reading = require("./commands-book/bookPosition.js");
const setreading = require("./commands-book/setBookPosition.js")

const commands = {choochoo, gif, randomwalk, find, assign, getnumber, userdb, mynumber, set, help, easteregg, supporterdb, random, reading, setreading};

module.exports = async function (msg) {
    if(msg.channel.id != 715786219770085396 && msg.channel.id != 847457657685934090){return}
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "?") {
      command = command.substring(1).toLowerCase();
      if(commands[command]){
        commands[command](msg, tokens);
      }
    }
};
