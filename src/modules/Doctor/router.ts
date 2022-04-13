import { Router } from "express";
//import { auth } from "../../middlewares";
import DoctorController from "./controller";

export default (controller: DoctorController) => {
  const doctorRouter = Router();

  doctorRouter.route("/").get(controller.getOne).post(controller.add);

  doctorRouter.route(`/auth`).post(controller.login);

  return doctorRouter;
};
