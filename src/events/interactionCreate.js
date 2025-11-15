
export default {
  name: "interactionCreate",
  async execute(i) {
    if (i.isStringSelectMenu() && i.customId === "owner-panel-options") {
      const v=i.values[0];
      return i.reply({ content:`Selected: ${v}`, ephemeral:true });
    }
  }
};
