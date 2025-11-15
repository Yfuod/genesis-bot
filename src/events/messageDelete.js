export default {
  name: "messageDelete",
  async execute(msg) {
    console.log(`🗑 Deleted: ${msg.content || "[embed/image]"}`);
  }
};