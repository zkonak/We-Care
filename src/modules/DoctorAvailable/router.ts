import { Router } from "express";
//import { auth } from "../../middlewares";
import DoctorAvailableController from "./controller";

export default ((controller: DoctorAvailableController) => {
    const doctorAvailableRouter = Router();

    doctorAvailableRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

   // doctorAvailableRouter.route(`/auth`).post(controller.login);

    return doctorAvailableRouter;
});