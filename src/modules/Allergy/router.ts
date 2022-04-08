import { Router } from "express";
//import { auth } from "../../middlewares";
import aAllergyController from "./controller";

export default ((controller: aAllergyController) => {
    const allergyRouter = Router();

    allergyRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

   // allergyRouter.route(`/auth`).post(controller.login);

    return allergyRouter;
});