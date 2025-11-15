import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("remove-role")
        .setDescription("Remove a staff role from a member.")
        .addUserOption(opt =>
            opt.setName("user")
                .setDescription("User to remove role from.")
                .setRequired(true)
        )
        .addRoleOption(opt =>
            opt.setName("role")
                .setDescription("Role to remove.")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

    async execute(interaction) {
        const user = interaction.options.getUser("user");
        const role = interaction.options.getRole("role");
        const member = await interaction.guild.members.fetch(user.id);

        if (!role) return interaction.reply("❌ Invalid role.");
        if (!member) return interaction.reply("❌ Invalid member.");

        await member.roles.remove(role);

        await interaction.reply(`🗑️ Removed **${role.name}** from **${user.username}**.`);
    }
};
