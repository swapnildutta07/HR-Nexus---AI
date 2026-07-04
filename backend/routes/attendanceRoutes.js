import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roleAuth.js';
import {
  checkInController,
  checkOutController,
  getMyWeeklyController,
  getAllAttendanceController
} from '../controllers/attendanceController.js';

const router = Router();

// POST /api/attendance/check-in (Protected: All users)
router.post('/check-in', requireAuth, checkInController);

// PUT /api/attendance/check-out (Protected: All users)
router.put('/check-out', requireAuth, checkOutController);

// GET /api/attendance/my-weekly (Protected: All users)
router.get('/my-weekly', requireAuth, getMyWeeklyController);

// GET /api/attendance/all (Protected: Admin/HR only)
router.get('/all', requireAuth, requireRole(['Admin', 'HR']), getAllAttendanceController);

export default router;
