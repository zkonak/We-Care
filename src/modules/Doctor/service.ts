import DoctorDTO from "./dto";
import { IDoctorRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IDoctorService {
  getAll() : Promise<DoctorDTO[]>
  register(doctorData: any) : Promise<DoctorDTO>
  login(doctorData: any) : Promise<DoctorDTO>
  findByEmail(doctorData:any):Promise<DoctorDTO>
  findById(id:any):Promise<DoctorDTO>
  getOne(doctorData:any):Promise<DoctorDTO>
  update(doctorData:any):Promise<DoctorDTO>
  delete(doctorData:any):Promise<DoctorDTO>

}


class DoctorService implements IDoctorService {
	public doctorRepo: any;
	public mailerService: any;

  constructor(doctorRepository:IDoctorRepository, mailerService:any) {
    this.doctorRepo = doctorRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const doctors = await this.doctorRepo.findAll();
    return doctors.map((doctor:any) => new DoctorDTO(doctor));
  }

  async register(doctorData:any) {
    if (!doctorData.email || !doctorData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const newDoctor = await this.doctorRepo.addNew(doctorData);
    await this.mailerService.sendMail(doctorData);
    return new DoctorDTO(newDoctor);
  }

  async login(doctorData:any) {
    if (!doctorData.email || !doctorData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const doctor = await this.doctorRepo.findByEmail(doctorData);
    if (!doctor)
      throw new ApiError(400, "Doctor with the specified email does not exists");

    const passwordMatch = await this.doctorRepo.compareHash(
      doctorData.password,
      doctor.password
    );
    if (!passwordMatch) throw new ApiError(400, "Doctor password does not match");

    return new DoctorDTO(doctor);
  }

  async findByEmail(doctorData:any) {
    return await this.doctorRepo.findByEmail(new DoctorDTO(doctorData));
  }

  async findById(id:any) {
    return await this.doctorRepo.findOne(id);
  }

  async getOne(doctorData:any): Promise<DoctorDTO> {
    const doctor = await this.doctorRepo.findOne(doctorData.id);
    if (!doctor) {
      //throw new ApiError("Ressource not exists");
    }
    return new DoctorDTO(doctor);
  }

  async update(doctorData:any) {
    
    const doctor = await this.getOne(doctorData);
    const doctorUpdated = await this.doctorRepo.update(doctorData);
    console.log(doctorUpdated)
    return  new DoctorDTO(doctorUpdated);
  }
  async delete(doctorData:any) {
    const doctor = await this.getOne(doctorData);
    const doctorDeleted = this.doctorRepo.delete(doctor);
    return new DoctorDTO(doctorDeleted);
  }
}

export default DoctorService;
