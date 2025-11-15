export default {
  name: "messageCreate",
  async execute(msg) {
    if (msg.author.bot) return;
    if (msg.content.toLowerCase().includes("hello")) {
      msg.reply("Hi hi~ 💮");
    }
  }
};