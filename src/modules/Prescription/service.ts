import PrescriptionDTO from "./dto";
import { IPrescriptionRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IPrescriptionService {
  getAll() : Promise<PrescriptionDTO[]>
  register(prescriptionData: any) : Promise<PrescriptionDTO>
  
  getOne(prescriptionData:any):Promise<PrescriptionDTO>
  update(prescriptionData:any):Promise<PrescriptionDTO>
  delete(prescriptionData:any):Promise<PrescriptionDTO>

}


class PrescriptionService implements IPrescriptionService {
	public prescriptionRepo: any;
	public mailerService: any;

  constructor(prescriptionRepository:IPrescriptionRepository, mailerService:any) {
    this.prescriptionRepo = prescriptionRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const prescriptions = await this.prescriptionRepo.findAll();
    return prescriptions.map((prescription:any) => new PrescriptionDTO(prescription));
  }

  async register(prescriptionData:any) {
   
    const newPrescription = await this.prescriptionRepo.addNew(prescriptionData);
    await this.mailerService.sendMail(prescriptionData);
    return new PrescriptionDTO(newPrescription);
  }

 


  async getOne(prescriptionData:any): Promise<PrescriptionDTO> {
    const prescription = await this.prescriptionRepo.findOne(prescriptionData);
    if (!prescription) {
      //throw new ApiError("Ressource not exists");
    }
    return new PrescriptionDTO(prescription);
  }

  async update(prescriptionData:any) {
    const prescription = await this.getOne(prescriptionData);
    const prescriptionUpdated = this.prescriptionRepo.update(prescription);
    return new PrescriptionDTO(prescriptionUpdated);
  }
  async delete(prescriptionData:any) {
    const prescription = await this.getOne(prescriptionData);
    const prescriptionDeleted = this.prescriptionRepo.delete(prescription);
    return new PrescriptionDTO(prescriptionDeleted);
  }
}

export default PrescriptionService;
