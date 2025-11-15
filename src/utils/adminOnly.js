import { isAdmin } from "./isAdmin.js";

export default function adminOnly(interaction) {
  if (!isAdmin(interaction.member)) {
    interaction.reply({ content: "❌ Admin only.", ephemeral: true });
    return false;
  }
  return true;
}
