import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Patient } from "../Patient/entity";


@Entity()
export class PatientDocument extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Patient, patient => patient.patientDocuments)
    patient: Patient;

    @Column()
    document:"longblob";

   

}