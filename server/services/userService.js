import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

export const getAll = async () => {
  return await UserModel.find({});
};

export const getUserByid = async id => {
  return await UserModel.findById(id);
};

export const getUserByUsername = async username => {
  return await UserModel.findOne({ username });
};

export const create = async user => {
  return await UserModel.create(user);
};

export const register = async (username, password) => {
  const isUser = await getUserByUsername(username);

  if (isUser) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = { username, password: hashedPassword };
  return await createUser(newUser);
};

export const login = async (username, password) => {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return { token, user };
};

export const getMe = async userId => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return { token, user };
};
