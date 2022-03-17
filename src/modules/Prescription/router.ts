import { Router } from "express";
//import { auth } from "../../middlewares";
import PrescriptionController from "./controller";

export default ((controller: PrescriptionController) => {
    const prescriptionRouter = Router();

    prescriptionRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

   // prescriptionRouter.route(`/auth`).post(controller.login);

    return prescriptionRouter;
});