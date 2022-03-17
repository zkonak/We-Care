import {getCustomRepository} from "typeorm";
import ServiceRepository from './repository';
import ServiceService from './service';
import ServiceController from './controller';
import ServiceRouter from './router';
import {jwtService, mailerService} from '../../libs';

const serviceRepository = getCustomRepository(ServiceRepository);
const serviceService = new ServiceService(serviceRepository, mailerService);
const serviceController = new ServiceController(serviceService, jwtService);
// const serviceRouter = ServiceRouter(serviceController);

export {serviceController};