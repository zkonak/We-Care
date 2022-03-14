import { Router } from "express";
//import { auth } from "../../middlewares";
import UserController from "./controller";

export default (controller: UserController) => {
  const userRouter = Router();

  userRouter.route("/").get(controller.getOne).post(controller.add);

  userRouter.route(`/auth`).post(controller.login);

  return userRouter;
};
