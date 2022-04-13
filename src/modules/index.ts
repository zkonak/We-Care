// import UserRouter from "./User/index.js";
// import PrescriptionRouter from "./Prescription/index.js";
// import ConsultationRouter from "./Consultation/index.js";
// import ServiceRouter from "./Service/index.js";
// import DrugRouter from "./Drug/index.js";
// import DrugPrescriptionRouter from "./DrugPrescription/index.js";

// const routes = {
//   "/user": UserRouter,
//   "/drug": DrugRouter,
//   "/drugprescription": DrugPrescriptionRouter,
//   "/prescription": PrescriptionRouter,
//   "/consultation": ConsultationRouter,
//   "/service": ServiceRouter

// };

// export default routes;

import { patientController } from "./Patient";
import { serviceController } from "./Service";
import { doctorController } from "./Doctor";
import { prescriptionController } from "./Prescription";
import { allergyController } from "./Allergy";
import { drugController } from "./Drug";
import ConsultationController from "./Consultation/controller";
import { consultationController } from "./Consultation";
const routes = [
  patientController,
  serviceController,
  doctorController,
  prescriptionController,
  allergyController,
  drugController,
  consultationController,
];

export default routes;
