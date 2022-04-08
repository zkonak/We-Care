import {getCustomRepository} from "typeorm";
import DrugRepository from './repository';
import DrugService from './service';
import DrugController from './controller';
import drugRouter from './router';


const drugRepository = getCustomRepository(DrugRepository);
const drugService = new DrugService(drugRepository);
const drugController = new DrugController(drugService);

export {drugController};