export default {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Genesis Bot Level B online as ${client.user.tag}`);
  }
}