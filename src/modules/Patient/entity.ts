import { Consultation } from "../Consultation/entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { PatientDocument } from "../PatientDocument/entity";

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;

  @Column()
  password: string;
  length: number;
  @OneToMany(() => Consultation, (consultation) => consultation.patient)
  consultations: Consultation[];

  @OneToMany(
    () => PatientDocument,
    (patientDocument) => patientDocument.patient
  )
  patientDocuments: PatientDocument[];
}

export type patient = {
  email: string;
  password: string;
};
