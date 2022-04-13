import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Doctor } from "../Doctor/entity";
import { Patient } from "../Patient/entity";
import { ManyToOne } from "typeorm";

@Entity()
export class Consultation extends BaseEntity {
  map(arg0: (consultation: any) => Consultation) {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  hour: string;
  @Column()
  valid: boolean;

  @ManyToOne(() => Patient, (patient) => patient.consultations)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.consultations)
  doctor: Doctor;
}
