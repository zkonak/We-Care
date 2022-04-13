import { Router } from "express";
import ConsultationController from "./controller";

export default (controller: ConsultationController) => {
  const consultationRouter = Router();

  consultationRouter.route("/").post(controller.add).get(controller.getOne);

  return consultationRouter;
};
