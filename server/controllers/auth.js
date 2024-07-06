import bcrypt from 'bcrypt';
import * as userService from '../services/userService.js';

// Registration
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUser = await userService.getUserByUsername(username);

    if (isUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = { username, password: hashedPassword };

    const user = await userService.create(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    return;
  } catch (error) {}
};

// Get current user
export const getMe = async (req, res) => {
  try {
    return;
  } catch (error) {}
};
