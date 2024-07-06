import { Router } from 'express';
import { getMe, login, register } from '../controllers/auth.js';

const router = Router();

// Registration
router.post('/register', register);

// Login
router.post('/login', login);

// Get current user
router.get('/me', getMe);

export default router;
