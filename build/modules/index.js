"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
// const routes = {
//   "/user": UserRouter,
//   "/drug": DrugRouter,
//   "/drugprescription": DrugPrescriptionRouter,
//   "/prescription": PrescriptionRouter,
//   "/consultation": ConsultationRouter,
//   "/service": ServiceRouter
// };
// export default routes;
=======
>>>>>>> 4200e2ee0aa6858a56ba9766eaf21fd5e01c85de
const Patient_1 = require("./Patient");
const Service_1 = require("./Service");
const Doctor_1 = require("./Doctor");
const Prescription_1 = require("./Prescription");
<<<<<<< HEAD
const Allergy_1 = require("./Allergy");
const Drug_1 = require("./Drug");
=======
const Consultation_1 = require("./Consultation");
>>>>>>> 4200e2ee0aa6858a56ba9766eaf21fd5e01c85de
const routes = [
    Patient_1.patientController,
    Service_1.serviceController,
    Doctor_1.doctorController,
    Prescription_1.prescriptionController,
<<<<<<< HEAD
    Allergy_1.allergyController,
    Drug_1.drugController,
=======
    Consultation_1.consultationController,
>>>>>>> 4200e2ee0aa6858a56ba9766eaf21fd5e01c85de
];
exports.default = routes;
