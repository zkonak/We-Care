import { patientController } from "./Patient";
import { serviceController } from "./Service";
import { doctorController } from "./Doctor";
import { prescriptionController } from "./Prescription";
import { consultationController } from "./Consultation";

const routes = [
  patientController,
  serviceController,
  doctorController,
  prescriptionController,
  consultationController,
];

export default routes;
