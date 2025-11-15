export async function createRoles(guild) {
  const roles = [
    "Owner", "Co-Owner", "Developer", "Scripter", "Modeler",
    "UI Designer", "Map Designer", "Tester", "Genesis Member",
    "Muted", "Genesis Moderator", "Genesis Administrator", "Verified Player"
  ];

  for (const r of roles) {
    if (!guild.roles.cache.find(role => role.name === r)) {
      await guild.roles.create({ name: r, color: "#FFB7C5" });
    }
  }
}
