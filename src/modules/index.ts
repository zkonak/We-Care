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

import {patientController} from './Patient';
import {serviceController} from './Service';
import {doctorController} from './Doctor';


const routes = [
    patientController,
    serviceController,
    doctorController
  
]

export default routes;
