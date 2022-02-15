import { Router } from "express";

class ConsultationRouter {
  constructor(controller) {
    this.router = Router();
    this.initializeRoutes(controller);
    return this.router;
  }

  initializeRoutes(controller) {
    this.router
      .route("/")
      .get(auth.isAuth, controller.getAll)
      .post(auth.isAuth, csrf, controller.add);
  }
}
