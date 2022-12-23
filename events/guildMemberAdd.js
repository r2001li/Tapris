const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    try {
      const channel = await member.client.channels.fetch("1047535734892023828");
      await channel.send(`<@${member.user.id}> Welcome to the server!`);
    } catch (error) {
      console.error(error);
    }
  },
};
