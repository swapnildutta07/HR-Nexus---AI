import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roleAuth.js';
import {
  applyLeaveController,
  getMyLeaveRequestsController,
  getPendingLeaveRequestsController,
  reviewLeaveRequestController
} from '../controllers/leaveController.js';

const router = Router();

// POST /api/leave/apply (Protected: All users)
router.post('/apply', requireAuth, applyLeaveController);

// GET /api/leave/my-requests (Protected: All users)
router.get('/my-requests', requireAuth, getMyLeaveRequestsController);

// GET /api/leave/pending (Protected: Admin/HR only)
router.get('/pending', requireAuth, requireRole(['Admin', 'HR']), getPendingLeaveRequestsController);

// PATCH /api/leave/:id/review (Protected: Admin/HR only)
router.patch('/:id/review', requireAuth, requireRole(['Admin', 'HR']), reviewLeaveRequestController);

export default router;
