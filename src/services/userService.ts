import { Phone, User } from "../models";
import {UserAttributes } from "../interfaces/user.interface"
import {hashPassword, compareHash} from '../handlers/handlerHash'
const getUsers = async () => {
  const { count, rows } = await User.findAndCountAll({include:Phone});
  return {
    total: count,
    users: rows,
  };
};
const getUserById = async (id:number) => {
    const user = await User.findByPk(id,{include:Phone});
    if (!user) throw new Error("Doesn't Exist");
    return user;
};

const getUserByEmail = async (email:string) => {
    const user = await User.findOne({where: {email}});
    if (!user) throw new Error("Doesn't Exist");
    return user;
};

const loginAndVerifyPassword = async (email:string, password:string)=>{
  const user = await getUserByEmail(email);
  if(await compareHash(password, user.password)){
    return user;
  }
  throw new Error("Invalid password")
}

const createUser = async (attributes:UserAttributes) => {
    attributes.password = await hashPassword(attributes.password)
    const user = User.create(attributes);
    return user;
};
const updateUserById = async (id:number, attributes:UserAttributes) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Not found")
    return await user.update(attributes);
};
const deleteUserById = async (id:number) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Not found")
    await user.destroy();
    return user;
};

export default {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
  getUserByEmail,
  loginAndVerifyPassword
};
