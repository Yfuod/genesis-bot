import {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("role-setup")
        .setDescription("Opens the role setup panel for staff roles.")
        .setDefaultMemberPermissions(8), // ADMIN

    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("create_staff_roles_btn")
                .setLabel("Create Staff Roles")
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId("assign_role_btn")
                .setLabel("Assign Role")
                .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
                .setCustomId("remove_role_btn")
                .setLabel("Remove Role")
                .setStyle(ButtonStyle.Danger)
        );

        await interaction.reply({
            content: "🛠️ **Role Setup Panel**\nChoose an option:",
            components: [row],
            ephemeral: true
        });
    }
};
