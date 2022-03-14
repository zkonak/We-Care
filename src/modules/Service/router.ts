import { Router } from "express";
//import { auth } from "../../middlewares";
import ServiceController from "./controller";

export default ((controller: ServiceController) => {
    const serviceRouter = Router();

    serviceRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

   

    return serviceRouter;
});