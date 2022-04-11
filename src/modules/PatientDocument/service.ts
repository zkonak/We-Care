import PatientDocumentDTO from "./dto";
import { IPatientDocumentRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IPatientDocumentService {
  getAll() : Promise<PatientDocumentDTO[]>
  register(patientDocumentData: any) : Promise<PatientDocumentDTO>
  
  getOne(patientDocumentData:any):Promise<PatientDocumentDTO>
  update(patientDocumentData:any):Promise<PatientDocumentDTO>
  delete(patientDocumentData:any):Promise<PatientDocumentDTO>

}


class PatientDocumentService implements IPatientDocumentService {
	public patientDocumentRepo: any;
	public mailerService: any;

  constructor(patientDocumentRepository:IPatientDocumentRepository, mailerService:any) {
    this.patientDocumentRepo = patientDocumentRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const patientDocuments = await this.patientDocumentRepo.findAll();
    return patientDocuments.map((patientDocument:any) => new PatientDocumentDTO(patientDocument));
  }

  async register(patientDocumentData:any) {
   
    const newPatientDocument = await this.patientDocumentRepo.addNew(patientDocumentData);
    
    return new PatientDocumentDTO(newPatientDocument);
  }

 


  async getOne(patientDocumentData:any): Promise<PatientDocumentDTO> {
    const patientDocument = await this.patientDocumentRepo.findOne(patientDocumentData);
    if (!patientDocument) {
      //throw new ApiError("Ressource not exists");
    }
    return new PatientDocumentDTO(patientDocument);
  }

  async update(patientDocumentData:any) {
    const patientDocument = await this.getOne(patientDocumentData.id);
    const patientDocumentUpdated = await this.patientDocumentRepo.update(patientDocumentData);
    return new PatientDocumentDTO(patientDocumentUpdated);
  }
  async delete(patientDocumentData:any) {
    const patientDocument = await this.getOne(patientDocumentData);
    const patientDocumentDeleted = await this.patientDocumentRepo.delete(patientDocument);
    return new PatientDocumentDTO(patientDocumentDeleted);
  }
}

export default PatientDocumentService;
