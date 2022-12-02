const { Client, Events, GateWayIntentBits } = require("discord.js");
const { token } = require("config.json");

const client = new Client({ intents: [GateWayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`${c.user.tag} online.`);
});

client.login(token);
