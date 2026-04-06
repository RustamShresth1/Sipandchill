import { Router } from 'express';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ success: true, message: 'SipAndChill API is running 🍵' });
});

export default router;
