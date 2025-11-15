import config from "../../config.json" assert { type: "json" };
export function isOwner(id) {
  return id === config.ownerId;
}
