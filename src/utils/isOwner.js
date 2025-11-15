import config from "../../config.json" assert { type: "json" };
export default function isOwner(id){ return id === config.ownerId; }