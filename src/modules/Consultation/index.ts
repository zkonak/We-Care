import ConsultationController from "./controller";
import ConsultationRepository from "./repository";
import ConsultationService from "./service";
import ConsultationRouter from "./router";

const consultationRepository = new ConsultationRepository(consultationDao);
const consultationService = new ConsultationService(consultationService);
const consultationController = new ConsultationController(consultationService);
const consultationRouter = new ConsultationRouter(consultationController);

export { consultationRouter, ConcsultationDao };

export default routes;
