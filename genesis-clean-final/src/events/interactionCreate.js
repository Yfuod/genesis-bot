export default {
  name: "interactionCreate",
  async execute(i, client) {
    if (!i.isChatInputCommand()) return;
    const cmd = client.commands.get(i.commandName);
    if (!cmd) return;

    try {
      await cmd.execute(i, client);
    } catch (e) {
      console.error(e);
      i.reply({ content: "Error executing command", ephemeral: true });
    }
  }
};
