import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roleAuth.js';
import {
  getMySlipController,
  getPayrollSummaryController,
  processPayrollController
} from '../controllers/payrollController.js';

const router = Router();

// GET /api/payroll/my-slip (Protected: All users)
router.get('/my-slip', requireAuth, getMySlipController);

// GET /api/payroll/summary (Protected: Admin/HR only)
router.get('/summary', requireAuth, requireRole(['Admin', 'HR']), getPayrollSummaryController);

// POST /api/payroll/process (Protected: Admin/HR only)
router.post('/process', requireAuth, requireRole(['Admin', 'HR']), processPayrollController);

export default router;
