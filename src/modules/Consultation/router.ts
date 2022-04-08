import { Router } from "express";
import ConsultationController from "./controller";
//import { auth } from "../../middlewares";
import Controller from "./controller";

export default (controller: ConsultationController) => {
  const consultationRouter = Router();

  consultationRouter.route("/").get(controller.getOne).post(controller.add);

  return consultationRouter;
};
