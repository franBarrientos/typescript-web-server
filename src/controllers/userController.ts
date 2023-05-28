import { responseError, responseSuccess } from "../handlers/handlerResponses";
import { Request, Response } from "express";
import { Actor, User } from "../models";
import userService from "../services/userService";

const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await userService.getUsers();
    responseSuccess(res, allUsers, 200);
  } catch (error) {
    responseError(res, "ERROR_GET_USERS", error);
  }
};
const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(+id);
    responseSuccess(res, user, 200);
  } catch (error) {
    responseError(res, "ERROR_GET_USER", error);
  }
};
const createUser = async (req: Request, res: Response) => {
  try {
    const attributes = {
      firstName : req.body.firstName,
      email:req.body.email,
      lastName : req.body.lastName
    }
    const newUser = await userService.createUser(attributes);
    responseSuccess(res, newUser, 201);
  } catch (error) {
    responseError(res, "ERROR_CREATE_USER", error);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const user = await userService.updateUser(+id ,body)
    responseSuccess(res, user, 200);
  } catch (error) {
    responseError(res, "ERROR_UPDATE_USER", error);
  }
};

const deleteUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
   const deletedUser = await userService.deleteUsers(+id);
    responseSuccess(res, deletedUser , 200);
  } catch (error) {
    responseError(res, "ERROR_DELETE_USER", error);
  }
};

export default {
  createUser,
  deleteUsers,
  getUsers,
  getUser,
  updateUser,
};
