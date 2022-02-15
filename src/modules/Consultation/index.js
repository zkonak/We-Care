// import router from "./router.js";
// import ConsultationController from "./controller.js";
// import Consultation from "./model.js";
// const models = { Consultation };

// const controller = new ConsultationController(models);
// const routes = router(controller);

// export default routes;
import ConsultaionRepository from "./repository";
const consultationRepository = new ConsultaionRepository(consultationDao);
const consultationService = new ConsultationService(consultationService);
const consultationController = new UserController(userService, jwtService);
const consultationRouter = new UserRouter(userController);

export { userRouter, UserDao };

export default routes;
