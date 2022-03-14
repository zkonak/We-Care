import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { Prescription } from "./entity";


export interface IPrescriptionRepository {
  findAll() : Promise<Prescription[]>
  addNew(prescriptionEntity: any) : Promise<any>
  
}

@EntityRepository()
class PrescriptionRepository implements IPrescriptionRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(Prescription);
}

  async addNew(prescriptionEntity:any) {
    const salt = bcrypt.genSaltSync(10);
    prescriptionEntity.password = bcrypt.hashSync(prescriptionEntity.password, salt);
    return await this.manager.save(Prescription,prescriptionEntity);
  }

 
  async update(prescriptionEntity:any) {
    //return await this.manager.update(Prescription,prescriptionEntity);
  }

 async delete(prescriptionEntity:any) {
    //return await this.manager.delete(prescriptionEntity);
  }
}

export default PrescriptionRepository;
