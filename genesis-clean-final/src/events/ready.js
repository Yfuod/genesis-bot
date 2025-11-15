import { createRoles } from "../utils/createRoles.js";
import { createChannels } from "../utils/createChannels.js";

export default {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Genesis Online as ${client.user.tag}`);
    for (const guild of client.guilds.cache.values()) {
      await createRoles(guild);
      await createChannels(guild);
    }
  }
};
