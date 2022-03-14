import { getCustomRepository } from "typeorm";
import ConsultationController from "./controller";
import ConsultationRepository from "./repository";
import ConsultationService from "./service";

const consultationRepository = getCustomRepository(ConsultationRepository);
const consultationService = new ConsultationService(consultationRepository);
const consultationController = new ConsultationController(consultationService);

export { consultationController };
