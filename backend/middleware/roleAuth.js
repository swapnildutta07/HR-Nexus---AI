/**
 * Middleware factory to restrict route access by role.
 * Ensures the authenticated user has one of the allowed roles.
 * 
 * @param {string|string[]} allowedRoles - Single role string or array of roles permitted to access the route
 */
export const requireRole = (allowedRoles) => {
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  return (req, res, next) => {
    // This middleware requires that requireAuth has run and populated req.user
    if (!req.user) {
      return res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: 'Security configuration error: requireAuth must be executed before requireRole.'
      });
    }

    const userRole = req.user.role;

    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({
        status: 'error',
        statusCode: 403,
        message: `Forbidden: This resource requires one of the following roles: [${roles.join(', ')}]. Your current role is '${userRole || 'None'}'.`
      });
    }

    next();
  };
};
