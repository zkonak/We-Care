import { patient, Patient } from "../../../modules/Patient/entity";
import { IPatientRepository } from "../../../modules/Patient/repository";
import PatientService from "../../../modules/Patient/service";

//creer une base de donnée fake
const patients: Patient[] = [];

class PatientRepositoryMocks implements IPatientRepository {
  compareHash(password: string, hash: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async findAll() {
    return patients;
  }

  async addNew(patientEntity: patient) {
    let patient = new Patient();
    patient.email = patientEntity.email;
    patients.push(patient);
    return patients[patients.length - 1];
  }
  async findByEmail(patientData: any) {
    return patients[0];
  }
}
export default PatientRepositoryMocks;
