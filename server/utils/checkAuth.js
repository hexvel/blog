import jwt from 'jsonwebtoken';

const checkAuth = async (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/^Bearer\s/, '');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default checkAuth;
