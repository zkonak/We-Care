import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { Doctor } from "./entity";


export interface IDoctorRepository {
  findAll() : Promise<Doctor[]>
  addNew(doctorEntity: any) : Promise<any>
  findByEmail(doctorEntity: any) : Promise<Doctor | undefined>
  compareHash(password: string, hash: string) : Promise<boolean> 
}

@EntityRepository()
class DoctorRepository implements IDoctorRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(Doctor);
}

  async addNew(doctorEntity:any) {
    const salt = bcrypt.genSaltSync(10);
    doctorEntity.password = bcrypt.hashSync(doctorEntity.password, salt);
    return await this.manager.save(Doctor,doctorEntity);
  }

  async findByEmail(doctorEntity:any) {
    return await this.manager.findOne(Doctor,{ where: { email: doctorEntity.email } });
  }
  async findOne(id:any) {
    return await this.manager.findOne(Doctor,{where:{ id:id }} );
  }

  compareHash = async (password:any, hash:any) =>
    await bcrypt.compareSync(password, hash);

  async update(doctorEntity:any) {
    return await this.manager.update(Doctor,doctorEntity.id,{...doctorEntity});
  }

 async delete(doctorEntity:any) {
    return await this.manager.delete(Doctor,doctorEntity.id);
  }
}

export default DoctorRepository;
