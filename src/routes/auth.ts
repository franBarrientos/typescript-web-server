import express from 'express';
import authController from '../controllers/authController';
import { userValidator, loginValidator} from "../middlewares/userValidator"
const router = express();

    router
        .post("/register", userValidator, authController.registerUser)
        .post("/login", loginValidator, authController.loginUser)


export default router;