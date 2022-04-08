import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { DoctorAvailable } from "./entity";


export interface IDoctorAvailableRepository {
  findAll() : Promise<DoctorAvailable[]>
  addNew(doctorAvailableEntity: any) : Promise<any>
  
}

@EntityRepository()
class DoctorAvailableRepository implements IDoctorAvailableRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(DoctorAvailable);
}

  async addNew(doctorAvailableEntity:any) {
    const salt = bcrypt.genSaltSync(10);
    doctorAvailableEntity.password = bcrypt.hashSync(doctorAvailableEntity.password, salt);
    return await this.manager.save(DoctorAvailable,doctorAvailableEntity);
  }

 
  async update(doctorAvailableEntity:any) {
    //return await this.manager.update(DoctorAvailable,doctorAvailableEntity);
  }

 async delete(doctorAvailableEntity:any) {
    //return await this.manager.delete(doctorAvailableEntity);
  }
}

export default DoctorAvailableRepository;
