
import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/").post(controller.add);
  router.route("/").get(controller.getOne);
  router.route("/login").post(controller.login);
  router.route("/").patch(controller.update);

  return router;
};