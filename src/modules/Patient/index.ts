import { getCustomRepository } from "typeorm";
import PatientRepository from "./repository";
import PatientService from "./service";
import PatientController from "./controller";
import PatientRouter from "./router";
import { jwtService, mailerService } from "../../libs";

const patientRepository = getCustomRepository(PatientRepository);
const patientService = new PatientService(patientRepository, mailerService);
const patientController = new PatientController(patientService, jwtService);
// const patientRouter = PatientRouter(patientController);

export { patientController };
