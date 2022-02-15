import ConsultationController from "./controller";
import UserService from "../User/service";
class ConsultationDtO {
  Constructor({ id_patient, id_doctor, date }) {
    const patient = UserService.findById(id_patient);
    const doctor = UserService.findById(id_doctor);
  }
}

export default ConsultationDtO;
