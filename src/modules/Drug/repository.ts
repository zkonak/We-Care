import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { Drug } from "./entity";


export interface IDrugRepository {
  findAll() : Promise<Drug[]>
  addNew(drugEntity: DrugType ) : Promise<Drug>
  
}

type DrugType = {
    name: string
}

@EntityRepository()
class DrugRepository implements IDrugRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(Drug);
}

  async addNew(drugEntity: Drug) {
    
   
    return await this.manager.save(Drug,drugEntity);
  }

  async findOne(id:number) {
    return await this.manager.findOne(Drug,{ where: { id } });
  }


  async update(drugEntity:DrugType) {
    //return await this.manager.update(Drug,drugEntity);
  }

 async delete(drugEntity:DrugType) {
    //return await this.manager.delete(userEntity);
  }
}

export default DrugRepository;
