import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("assign-role")
        .setDescription("Assign a staff role to a member.")
        .addUserOption(opt =>
            opt.setName("user")
                .setDescription("The user to assign a role to.")
                .setRequired(true)
        )
        .addRoleOption(opt =>
            opt.setName("role")
                .setDescription("The role to assign.")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

    async execute(interaction) {
        const user = interaction.options.getUser("user");
        const role = interaction.options.getRole("role");
        const member = await interaction.guild.members.fetch(user.id);

        if (!role) return interaction.reply("❌ Invalid role.");
        if (!member) return interaction.reply("❌ Invalid member.");

        await member.roles.add(role);

        await interaction.reply(`✅ Assigned **${role.name}** to **${user.username}**.`);
    }
};
