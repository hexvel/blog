import { Router } from 'express';

const router = Router();

// Registration
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
});

export default router;
