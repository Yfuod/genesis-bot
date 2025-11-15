import config from "../../config.json" assert { type: "json" };

export function isOwner(userId) {
  return userId === config.ownerId;
}
