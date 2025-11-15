
export default {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Genesis Level B ready as ${client.user.tag}`);
  }
}
