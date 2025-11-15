export function isAdmin(member) {
  return member.permissions.has("Administrator");
}
