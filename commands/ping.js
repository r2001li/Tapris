const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hi")
    .setDescription("Say hi to Tapris"),
  async execute(interaction) {
    await interaction.reply(":flushed:");
  },
};
