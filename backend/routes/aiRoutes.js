import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { chatController } from '../controllers/aiController.js';

const router = Router();

// POST /api/ai/chat (Protected: All users)
router.post('/chat', requireAuth, chatController);

export default router;
