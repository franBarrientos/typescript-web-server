import express from "express";
import userController from "../controllers/userController";
import { userValidator, updateValidator } from "../middlewares/userValidator";
const router = express();

router
  .get("/", userController.getUsers)
  .get("/:id", userController.getUser)
  .post("/", [...userValidator],userController.createUser)
  .patch("/:id", [...updateValidator],userController. updateUser)
  .delete("/:id", [...updateValidator],userController.deleteUsers);

export default router;
