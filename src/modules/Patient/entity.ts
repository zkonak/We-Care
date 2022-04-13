import { Consultation } from "../Consultation/entity";
import { OneToMany } from "typeorm";
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
  name: string;
  @Column()
  email: string;

  @Column()
  password: string;
  length: number;
  @OneToMany(() => Consultation, (consultation) => consultation.patient)
  consultations: Consultation[];
}

export type patient = {
  email: string;
  password: string;
};
