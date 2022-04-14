import { ConnectionOptions, getConnectionManager } from "typeorm";
import config from "./env";
import { Patient } from "../modules/Patient/entity";
import { Doctor } from "../modules/Doctor/entity";
import { Service } from "../modules/Service/entity";
import { Consultation } from "../modules/Consultation/entity";
import { Prescription } from "../modules/Prescription/entity";
import { Allergy } from "../modules/Allergy/entity";
import { Drug } from "../modules/Drug/entity";
console.log("database is connected");
const entities = [
  Patient,
  Doctor,
  Service,
  Allergy,
  Consultation,
  Prescription,
  Drug,
];

const options: ConnectionOptions = {
  type: "mysql",
  host: config.db_host,
  port: config.db_port,
  username: config.db_user,
  password: config.db_password,
  database: config.db_name,
  logging: true,
  synchronize: false,
  migrationsRun: false,
  entities: [__dirname + "/../modules/**/entity.{js,ts}"],
  migrations: ["src/config/database/migration/*.ts"],
};
console.log(__dirname);
const connectionManager = getConnectionManager();

const db = connectionManager.create(options);
export default db;
