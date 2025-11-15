export default {
  name: "guildMemberRemove",
  async execute(member) {
    const channel = member.guild.systemChannel;
    if (!channel) return;
    channel.send(`🌸 ${member.user.tag} has left the server.`);
  }
};