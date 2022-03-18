import { Router } from "express";
//import { auth } from "../../middlewares";
import DrugController from "./controller";

export default ((controller: DrugController) => {
    const drugRouter = Router();

    drugRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);

    return drugRouter;
});