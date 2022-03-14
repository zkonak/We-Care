class ConsultationDtO {
  id;

  id_doctor;
  patients;
  constructor({
    id,
    id_doctor,
    patients,
  }: {
    id: number;
    id_doctor: number;
    patients: Patients[];
  }) {
    (this.id = id), (this.id_doctor = id_doctor), (this.patients = patients);
  }
}

export default ConsultationDtO;
