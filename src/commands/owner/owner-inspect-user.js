
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("owner-inspect-user")
    .setDescription("Inspect a user's full info")
    .addUserOption(o=>o.setName("user").setDescription("Target user").setRequired(true)),

  async execute(i){
    if(i.user.id !== i.client.config.ownerId)
      return i.reply({content:"Not owner",ephemeral:true});

    const u = i.options.getUser("user");
    const m = await i.guild.members.fetch(u.id);

    const embed = new EmbedBuilder()
      .setTitle(`🔍 Inspecting ${u.tag}`)
      .addFields(
        {name:"User ID", value:u.id},
        {name:"Bot?", value:u.bot ? "Yes" : "No"},
        {name:"Roles", value:m.roles.cache.map(r=>r.name).join(", ") || "None"},
        {name:"Joined Server", value:`<t:${int(m.joinedTimestamp/1000)}:R>`},
        {name:"Account Created", value:`<t:${int(u.createdTimestamp/1000)}:R>`},
      )
      .setColor("#ff66cc");

    i.reply({embeds:[embed]});
  }
};