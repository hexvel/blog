import UserModel from '../models/User.js';

export const getAll = async () => {
  return await UserModel.find({});
};

export const getUserByUsername = async username => {
  return await UserModel.findOne({ username });
};

export const create = async user => {
  return await UserModel.create(user);
};
