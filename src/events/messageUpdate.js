export default {
  name: "messageUpdate",
  async execute(oldMsg, newMsg) {
    console.log(`✏ Message edited: ${oldMsg.content} → ${newMsg.content}`);
  }
};