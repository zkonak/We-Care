import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { PatientDocument } from "./entity";


export interface IPatientDocumentRepository {
  findAll() : Promise<PatientDocument[]>
  addNew(patientDocumentEntity: any) : Promise<any>
  
}

@EntityRepository()
class PatientDocumentRepository implements IPatientDocumentRepository {
constructor(private manager: EntityManager) {
  }

  async findAll() {
    return await this.manager.find(PatientDocument);
}

  async addNew(patientDocumentEntity:any) {
      return await this.manager.save(PatientDocument,patientDocumentEntity);
  }

  async findOne(id:any) {
    return await this.manager.findOne(PatientDocument,{where:{ id:id }} );
  }

  async update(patientDocumentEntity:any) {
    console.log(patientDocumentEntity)
    return await this.manager.update(PatientDocument,patientDocumentEntity.id,{...patientDocumentEntity});
  }

 async delete(patientDocumentEntity:any) {
  return await this.manager.delete(PatientDocument,patientDocumentEntity.id);
  }
}

export default PatientDocumentRepository;
