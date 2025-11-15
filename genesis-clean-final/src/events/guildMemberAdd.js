export default {
  name: "guildMemberAdd",
  async execute(member) {
    const role = member.guild.roles.cache.find(r => r.name === "Genesis Member");
    if (role) member.roles.add(role);

    const ch = member.guild.channels.cache.find(c => c.name === "welcome-gate");
    if (ch) ch.send(`Welcome <@${member.id}> 🌸`);
  }
};
