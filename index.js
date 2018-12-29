const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: false,
  sync: null
});

const instance = require("./package.json");
const botConfig = require("./botConfig.json");

client.on("ready", () => {
  console.log(`Client ready on ${client.guilds.size} guilds.`);
  client.user.setActivity(`v${instance.version}`);
  client.user.setStatus("dnd");
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  
});

client.login(botConfig.localToken);
