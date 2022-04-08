import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { Allergy } from "./entity";


export interface IAllergyRepository {
  findAll() : Promise<Allergy[]>
  addNew(allergyEntity: any) : Promise<any>
  
  
}

@EntityRepository()
class AllergyRepository implements IAllergyRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(Allergy);
}

  async addNew(allergyEntity:any) {
  
   
    return await this.manager.save(Allergy,allergyEntity);
  }

  async findOne(id:any) {
    return await this.manager.findOne(Allergy,{ where: { id: id } });
  }
  async update(allergyEntity:any) {
    //return await this.manager.update(Allergy,allergyEntity);
  }

 async delete(allergyEntity:any) {
    //return await this.manager.delete(allergyEntity);
  }
}

export default AllergyRepository;
