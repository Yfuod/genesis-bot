
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, PermissionFlagsBits } = require('discord.js');

module.exports={
  data:new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Create a ticket")
    .addStringOption(o=>o.setName("type").setDescription("Ticket type").setRequired(true)
      .addChoices(
        {name:"Support",value:"support"},
        {name:"Bug Report",value:"bug"},
        {name:"Appeal",value:"appeal"},
        {name:"Developer Help",value:"devhelp"}
      )),
  async execute(i){
    const type=i.options.getString("type");
    const guild=i.guild;

    const chan=await guild.channels.create({
      name:`${type}-`+i.user.username,
      type:ChannelType.GuildText,
      permissionOverwrites:[
        {id:guild.id, deny:[PermissionFlagsBits.ViewChannel]},
        {id:i.user.id, allow:[PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages]},
      ]
    });

    const closeBtn=new ButtonBuilder()
      .setCustomId("close_ticket")
      .setLabel("Close Ticket")
      .setStyle(ButtonStyle.Danger);

    await chan.send({
      content:`Ticket created for <@${i.user.id}>`,
      components:[new ActionRowBuilder().addComponents(closeBtn)]
    });

    await i.reply({content:`Your ticket is created: <#${chan.id}>`, ephemeral:true});
  }
};
