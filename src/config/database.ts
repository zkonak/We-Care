import {getConnectionManager} from "typeorm";
import { Patient } from '../modules/Patient/entity';
import { Doctor } from '../modules/Doctor/entity';
import { Service } from '../modules/Service/entity';
import { Prescription } from '../modules/Prescription/entity';
import { Allergy } from '../modules/Allergy/entity';
import { Consultation } from '../modules/Consultation/entity';
import { DoctorAvailable } from "../modules/DoctorAvailable/entity";
console.log("database connectttt")
const entities = [Patient,Doctor,Service,Prescription,Allergy,Consultation,DoctorAvailable];

const connectionManager = getConnectionManager();

const db = connectionManager.create({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Pars1803?",
  database: "we_care",
  logging: true,
  synchronize: true,
  entities: entities,
});

export default db;
