import { isOwner } from "./isOwner.js";

export default function ownerOnly(interaction) {
  if (!isOwner(interaction.user.id)) {
    interaction.reply({ content: "❌ Owner only.", ephemeral: true });
    return false;
  }
  return true;
}
