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
      return await this.manager.save(DoctorAvailable,doctorAvailableEntity);
  }

  async findOne(id:any) {
    return await this.manager.findOne(DoctorAvailable,{where:{ id:id }} );
  }

  async update(doctorAvailableEntity:any) {
    console.log(doctorAvailableEntity)
    return await this.manager.update(DoctorAvailable,doctorAvailableEntity.id,{...doctorAvailableEntity});
  }

 async delete(doctorAvailableEntity:any) {
    //return await this.manager.delete(doctorAvailableEntity);
  }
}

export default DoctorAvailableRepository;
