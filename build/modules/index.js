"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = require("./Patient");
const Service_1 = require("./Service");
const Doctor_1 = require("./Doctor");
const Prescription_1 = require("./Prescription");
const Consultation_1 = require("./Consultation");
const routes = [
    Patient_1.patientController,
    Service_1.serviceController,
    Doctor_1.doctorController,
    Prescription_1.prescriptionController,
    Consultation_1.consultationController,
];
exports.default = routes;
