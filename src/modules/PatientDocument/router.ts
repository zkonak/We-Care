import { Router } from "express";
//import { auth } from "../../middlewares";
import PatientDocumentController from "./controller";

export default ((controller: PatientDocumentController) => {
    const patientDocumentRouter = Router();

    patientDocumentRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

   // patientDocumentRouter.route(`/auth`).post(controller.login);

    return patientDocumentRouter;
});