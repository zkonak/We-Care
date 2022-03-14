import {getConnectionManager} from "typeorm";
import { Patient } from '../modules/Patient/entity';
import { Doctor } from '../modules/Doctor/entity';
import { Service } from '../modules/Service/entity';
console.log("database connectttt")
const entities = [Patient,Doctor,Service];

const connectionManager = getConnectionManager();

const db =   connectionManager.create({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "we_care",
    logging: true,
    synchronize: true,
    entities: entities
});





export default db;