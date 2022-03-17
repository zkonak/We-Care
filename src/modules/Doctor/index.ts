import {getCustomRepository} from "typeorm";
import DoctorRepository from './repository';
import DoctorService from './service';
import DoctorController from './controller';
import DoctorRouter from './router';
import {jwtService, mailerService} from '../../libs';

const doctorRepository = getCustomRepository(DoctorRepository);
const doctorService = new DoctorService(doctorRepository, mailerService);
const doctorController = new DoctorController(doctorService, jwtService);
// const doctorRouter = DoctorRouter(doctorController);

export {doctorController};