import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roleAuth.js';
import {
  getDashboardSummaryController,
  getMyProfileController,
  listEmployeesController,
  updateMyProfileController
} from '../controllers/employeeController.js';

const router = Router();

// GET /api/employee/dashboard-summary (Protected: Admin/HR only)
router.get(
  '/dashboard-summary',
  requireAuth,
  requireRole(['Admin', 'HR']),
  getDashboardSummaryController
);

// GET /api/employee/profile/me (Protected: All users)
router.get(
  '/profile/me',
  requireAuth,
  getMyProfileController
);

// GET /api/employee/list (Protected: Admin/HR only)
router.get(
  '/list',
  requireAuth,
  requireRole(['Admin', 'HR']),
  listEmployeesController
);

// PUT /api/employee/profile/update (Protected: All users)
router.put(
  '/profile/update',
  requireAuth,
  updateMyProfileController
);

export default router;
