import { Actor, User } from "../models";
import {UserAttributes } from "../models/user.model"

const getUsers = async () => {
  const { count, rows } = await User.findAndCountAll();
  return {
    total: count,
    users: rows,
  };
};
const getUser = async (id:number) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error("Doesn't Exist");
    return user;
};

const createUser = async (attributes:UserAttributes) => {
    const user = User.create(attributes);
    return user;
};
const updateUser = async (id:number, attributes:object) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Not found")
    return await user.update(attributes);
};
const deleteUsers = async (id:number) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Not found")
    await user.destroy();
    return user;
};

export default {
  createUser,
  deleteUsers,
  getUser,
  getUsers,
  updateUser,
};
