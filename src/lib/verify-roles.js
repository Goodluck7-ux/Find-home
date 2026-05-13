export function authorizeRoles(user, allowedRoles = []) {
  if (!allowedRoles.includes(user.role)) {
    return Response.json(
      { success:false, message: "Forbidden: insufficient permissions to access these resources" },
      { status: 403 }
    );
  }

  return null;
}
