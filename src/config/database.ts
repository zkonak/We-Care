import { getConnectionManager } from "typeorm";
import { Patient } from "../modules/Patient/entity";
import { Doctor } from "../modules/Doctor/entity";
import { Service } from "../modules/Service/entity";
import { Consultation } from "../modules/Consultation/entity";
import { DoctorAvailable } from "../modules/DoctorAvailable/entity";
import { Drug } from "../modules/Drug/entity";
import { Prescription } from "../modules/Prescription/entity";
import { Allergy } from "../modules/Allergy/entity";
import { PatientDocument } from "../modules/PatientDocument/entity";
console.log("database is connected");
const entities = [Patient, Doctor, Service, Consultation,DoctorAvailable,Drug,Prescription,Allergy,PatientDocument];

const connectionManager = getConnectionManager();

const db = connectionManager.create({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "root",
  database: "WeCare",
  logging: true,
  synchronize: true,
  entities: entities,
});

export default db;
