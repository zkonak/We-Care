import { Patient } from "../Patient/entity";

class ConsultationDtO {
  public id: number;
  //   id_doctor;
  //   patients;
  constructor({
    id,
  }: // id_doctor,
  // patients,
  {
    id: number;
    // id_doctor: number;
    // patients: Patient[];
  }) {
    this.id = id;
    //(this.patients = patients);
    // (this.id_doctor = id_doctor)
  }
}

export default ConsultationDtO;
