import { supabase } from '../config/supabase.js';

/**
 * Middleware to require authentication via Supabase JWT.
 * Verifies token validity and maps the user to their profile in the 'employees' table.
 */
export const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: 'error',
        statusCode: 401,
        message: 'Access token missing or malformed. Use standard Bearer token header.'
      });
    }

    const token = authHeader.split(' ')[1];

    // Verify token using Supabase client auth service
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({
        status: 'error',
        statusCode: 401,
        message: authError ? authError.message : 'Invalid or expired access token.'
      });
    }

    // Retrieve corresponding employee row from Supabase Database.
    // NOTE: This assumes the 'employees' table uses a primary key or foreign key mapping 'id' referencing the auth.users UUID.
    const { data: employee, error: dbError } = await supabase
      .from('employees')
      .select('*')
      .eq('id', user.id)
      .single();

    if (dbError || !employee) {
      console.warn(`[authMiddleware] Authenticated UUID ${user.id} has no matching record in 'employees' table:`, dbError);
      return res.status(403).json({
        status: 'error',
        statusCode: 403,
        message: 'Authenticated, but no matching employee profile was found.'
      });
    }

    // Attach complete employee record to request object for downstream controllers
    req.user = employee;
    
    next();
  } catch (error) {
    next(error); // Forward system-level exceptions to global error handler
  }
};
