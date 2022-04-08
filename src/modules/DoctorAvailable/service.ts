import DoctorAvailableDTO from "./dto";
import { IDoctorAvailableRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IDoctorAvailableService {
  getAll() : Promise<DoctorAvailableDTO[]>
  register(doctorAvailableData: any) : Promise<DoctorAvailableDTO>
  
  getOne(doctorAvailableData:any):Promise<DoctorAvailableDTO>
  update(doctorAvailableData:any):Promise<DoctorAvailableDTO>
  delete(doctorAvailableData:any):Promise<DoctorAvailableDTO>

}


class DoctorAvailableService implements IDoctorAvailableService {
	public doctorAvailableRepo: any;
	public mailerService: any;

  constructor(doctorAvailableRepository:IDoctorAvailableRepository, mailerService:any) {
    this.doctorAvailableRepo = doctorAvailableRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const doctorAvailables = await this.doctorAvailableRepo.findAll();
    return doctorAvailables.map((doctorAvailable:any) => new DoctorAvailableDTO(doctorAvailable));
  }

  async register(doctorAvailableData:any) {
   
    const newDoctorAvailable = await this.doctorAvailableRepo.addNew(doctorAvailableData);
    await this.mailerService.sendMail(doctorAvailableData);
    return new DoctorAvailableDTO(newDoctorAvailable);
  }

 


  async getOne(doctorAvailableData:any): Promise<DoctorAvailableDTO> {
    const doctorAvailable = await this.doctorAvailableRepo.findOne(doctorAvailableData);
    if (!doctorAvailable) {
      //throw new ApiError("Ressource not exists");
    }
    return new DoctorAvailableDTO(doctorAvailable);
  }

  async update(doctorAvailableData:any) {
    const doctorAvailable = await this.getOne(doctorAvailableData);
    const doctorAvailableUpdated = this.doctorAvailableRepo.update(doctorAvailable);
    return new DoctorAvailableDTO(doctorAvailableUpdated);
  }
  async delete(doctorAvailableData:any) {
    const doctorAvailable = await this.getOne(doctorAvailableData);
    const doctorAvailableDeleted = this.doctorAvailableRepo.delete(doctorAvailable);
    return new DoctorAvailableDTO(doctorAvailableDeleted);
  }
}

export default DoctorAvailableService;
