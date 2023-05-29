import { Request, Response } from "express";
import { responseError, responseSuccess } from "../handlers/handlerResponses";
import userService from "../services/userService";
import {signToken,verifyToken} from "../handlers/handlerJWT"
const registerUser = async (req: Request, res: Response) => {
try {
    const user = await userService.createUser(req.body);
    const payload = {id:user.id}
    const tokenjwt = signToken(payload)
    responseSuccess(res, {user,tokenjwt})
} catch (error) {
    responseError(res, "ERROR_AUTH_REGISTER", error)
}};

const loginUser = async (req: Request, res: Response) => {
    try {
    const user = await userService.loginAndVerifyPassword(req.body.email, req.body.password);
    const payload = {id:user.id}
    const tokenjwt = signToken(payload)
    responseSuccess(res, {user,tokenjwt})
    } catch (error) {
        responseError(res, "ERROR_AUTH_LOGIN", error)
    }
};

export default {
  loginUser,
  registerUser,
};
