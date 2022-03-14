import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { Service } from "./entity";


export interface IServiceRepository {
  findAll() : Promise<Service[]>
  addNew(serviceEntity: any) : Promise<any>
  
}

@EntityRepository()
class ServiceRepository implements IServiceRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(Service);
}

  async addNew(serviceEntity:any) {
    
   
    return await this.manager.save(Service,serviceEntity);
  }

  async findOne(id:any) {
    return await this.manager.findOne(Service,{ where: { id: id } });
  }


  async update(userEntity:any) {
    //return await this.manager.update(User,userEntity);
  }

 async delete(userEntity:any) {
    //return await this.manager.delete(userEntity);
  }
}

export default ServiceRepository;
