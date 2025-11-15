export async function createChannels(guild) {
  const channels = ["welcome-gate", "mod-logs", "staff-updates", "bot-commands"];

  for (const c of channels) {
    if (!guild.channels.cache.find(ch => ch.name === c)) {
      await guild.channels.create({ name: c, type: 0 });
    }
  }
}
