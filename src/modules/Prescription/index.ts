import {getCustomRepository} from "typeorm";
import PrescriptionRepository from './repository';
import PrescriptionService from './service';
import PrescriptionController from './controller';
import PrescriptionRouter from './router';
import {jwtService, mailerService} from '../../libs';

const prescriptionRepository = getCustomRepository(PrescriptionRepository);
const prescriptionService = new PrescriptionService(prescriptionRepository, mailerService);
const prescriptionController = new PrescriptionController(prescriptionService, jwtService);
// const prescriptionRouter = PrescriptionRouter(prescriptionController);

export {prescriptionController};