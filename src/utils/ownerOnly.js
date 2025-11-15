export default function ownerOnly(interaction) {
  return interaction.user.id === process.env.OWNER_ID;
}
