import ConsultationController from "./controller";
import UserService from "../User/service";
class ConsultationDTO {
  Constructor({ id_patient, id_doctor, date }) {
    const patient = UserService.findById(id_patient);
    const doctor = UserService.findById(id_doctor);
  }
}

export default ConsultationDTO;
