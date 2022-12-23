const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tag")
    .setDescription("Tags")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a tag")
        .addStringOption((option) =>
          option.setName("name").setDescription("tag name")
        )
        .addStringOption((option) =>
          option.setName("description").setDescription("tag description")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("get")
        .setDescription("Fetch a tag")
        .addStringOption((option) =>
          option.setName("name").setDescription("tag name")
        )
    ),
  async execute(interaction) {
    if (interaction.options.getSubcommand() === "create") {
      const tagName = interaction.options.getString("name");
      const tagDesc = interaction.options.getString("description");

      try {
        const tag = await interaction.client.Tags.create({
          name: tagName,
          description: tagDesc,
          username: interaction.user.username,
        });
        return interaction.reply(`Tag ${tag.name} added.`);
      } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
          return interaction.reply("That tag already exists.");
        }
        return interaction.reply("Something went wrong with adding a tag.");
      }
    } else if (interaction.options.getSubcommand() === "get") {
      const tagName = interaction.options.getString("name");
      const tag = await interaction.client.Tags.findOne({
        where: { name: tagName },
      });
      if (tag) {
        tag.increment("usage_count");
        return interaction.reply(tag.get("description"));
      }
    }
  },
};
