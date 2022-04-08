import {getCustomRepository} from "typeorm";
import DoctorAvailableRepository from './repository';
import DoctorAvailableService from './service';
import DoctorAvailableController from './controller';
import DoctorAvailableRouter from './router';
import {jwtService, mailerService} from '../../libs';

const doctorAvailableRepository = getCustomRepository(DoctorAvailableRepository);
const doctorAvailableService = new DoctorAvailableService(doctorAvailableRepository, mailerService);
const doctorAvailableController = new DoctorAvailableController(doctorAvailableService, jwtService);
// const doctorAvailableRouter = DoctorAvailableRouter(doctorAvailableController);

export {doctorAvailableController};