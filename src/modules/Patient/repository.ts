import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { Patient } from "./entity";


export interface IPatientRepository {
  findAll() : Promise<Patient[]>
  addNew(patientEntity: any) : Promise<any>
  findByEmail(patientEntity: any) : Promise<Patient | undefined>
  compareHash(password: string, hash: string) : Promise<boolean> 
}

@EntityRepository()
class PatientRepository implements IPatientRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(Patient);
}

  async addNew(patientEntity:any) {
    const salt = bcrypt.genSaltSync(10);
    patientEntity.password = bcrypt.hashSync(patientEntity.password, salt);
    return await this.manager.save(Patient,patientEntity);
  }

  async findByEmail(patientEntity:any) {
    return await this.manager.findOne(Patient,{ where: { email: patientEntity.email } });
  }
  async findOne(id:any) {
    return await this.manager.findOne(Patient,{ where: { id: id } });
  }

  compareHash = async (password:any, hash:any) =>
    await bcrypt.compareSync(password, hash);

  async update(patientEntity:any) {
    //return await this.manager.update(Patient,patientEntity);
  }

 async delete(patientEntity:any) {
    //return await this.manager.delete(patientEntity);
  }
}

export default PatientRepository;
