import {getCustomRepository} from "typeorm";
import PatientDocumentRepository from './repository';
import PatientDocumentService from './service';
import PatientDocumentController from './controller';
import PatientDocumentRouter from './router';
import {jwtService, mailerService} from '../../libs';

const patientDocumentRepository = getCustomRepository(PatientDocumentRepository);
const patientDocumentService = new PatientDocumentService(patientDocumentRepository, mailerService);
const patientDocumentController = new PatientDocumentController(patientDocumentService, jwtService);
// const patientDocumentRouter = PatientDocumentRouter(patientDocumentController);

export {patientDocumentController};