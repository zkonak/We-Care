import { Router } from "express";
//import { auth } from "../../middlewares";
import PatientController from "./controller";

export default ((controller: PatientController) => {
    const patientRouter = Router();

    patientRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

    patientRouter.route(`/auth`).post(controller.login);

    return patientRouter;
});