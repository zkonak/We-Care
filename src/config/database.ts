import {getConnectionManager} from "typeorm";
import { User } from '../modules/User/entity';
console.log("database connectttt")
const entities = [User];

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