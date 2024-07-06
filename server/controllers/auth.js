import * as userService from '../services/userService.js';

// Registration
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.register(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { token, user } = await userService.login(username, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get current user
export const getMe = async (req, res) => {
  try {
    const user = await userService.getMe(req.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
