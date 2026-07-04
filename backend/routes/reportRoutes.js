import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roleAuth.js';
import { downloadReportController } from '../controllers/reportController.js';

const router = Router();

// GET /api/reports/generate (Protected: Admin/HR only)
router.get('/generate', requireAuth, requireRole(['Admin', 'HR']), downloadReportController);

export default router;
