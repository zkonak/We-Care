import {getCustomRepository} from "typeorm";
import AllergyRepository from './repository';
import AllergyService from './service';
import AllergyController from './controller';
import AllergyRouter from './router';
import {jwtService, mailerService} from '../../libs';

const allergyRepository = getCustomRepository(AllergyRepository);
const allergyService = new AllergyService(allergyRepository, mailerService);
const allergyController = new AllergyController(allergyService, jwtService);
// const allergyRouter = AllergyRouter(allergyController);

export {allergyController};