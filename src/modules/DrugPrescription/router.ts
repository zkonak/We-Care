import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/").post(controller.add);
  router.route("/").get(controller.getOne);
  router.route("/").patch(controller.update);
  router.route("/").delete(controller.delete);
  return router;
};