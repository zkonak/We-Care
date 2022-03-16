import PatientDTO from "./dto";
import { IPatientRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";
import { patient } from "./entity";

export interface IPatientService {
  getAll(): Promise<PatientDTO[]>;
  register(patientData: any): Promise<PatientDTO>;
  login(patientData: any): Promise<PatientDTO>;
  findByEmail(patientData: any): Promise<PatientDTO>;
  findById(id: any): Promise<PatientDTO>;
  getOne(patientData: any): Promise<PatientDTO>;
  update(patientData: any): Promise<PatientDTO>;
  delete(patientData: any): Promise<PatientDTO>;
}

class PatientService implements IPatientService {
  public patientRepo: any;
  public mailerService: any;

  constructor(patientRepository: IPatientRepository, mailerService: any) {
    this.patientRepo = patientRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const patients = await this.patientRepo.findAll();
    return patients.map((patient: any) => new PatientDTO(patient));
  }

  async register(patientData: any) {
    if (!patientData.email || !patientData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const newPatient = await this.patientRepo.addNew(patientData);
    await this.mailerService.sendMail(patientData);
    return new PatientDTO(newPatient);
  }

  async login(patientData: any) {
    if (!patientData.email || !patientData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const patient = await this.patientRepo.findByEmail(patientData);
    if (!patient)
      throw new ApiError(
        400,
        "Patient with the specified email does not exists"
      );

    const passwordMatch = await this.patientRepo.compareHash(
      patientData.password,
      patient.password
    );
    if (!passwordMatch)
      throw new ApiError(400, "Patient password do not match");

    return new PatientDTO(patient);
  }

  async findByEmail(patientData: any) {
    return await this.patientRepo.findByEmail(new PatientDTO(patientData));
  }

  async findById(id: any) {
    return await this.patientRepo.findOne(id);
  }

  async getOne(patientData: any): Promise<PatientDTO> {
    const patient = await this.patientRepo.findOne(patientData);
    if (!patient) {
      //throw new ApiError("Ressource not exists");
    }
    return new PatientDTO(patient);
  }

  async update(patientData: any) {
    const patient = await this.getOne(patientData);
    const patientUpdated = this.patientRepo.update(patient);
    return new PatientDTO(patientUpdated);
  }
  async delete(patientData: any) {
    const patient = await this.getOne(patientData);
    const patientDeleted = this.patientRepo.delete(patient);
    return new PatientDTO(patientDeleted);
  }
}

export default PatientService;
