import { Consultation } from "../Consultation/entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
  length: number;
  //   @ManyToOne(() => Consultation, (consultation) => consultation.patients)
  //   consultation: Consultation;
}

export type patient = {
  email: string;
  password: string;
};
