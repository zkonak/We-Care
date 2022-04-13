import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Consultation } from "../Consultation/entity";
import { DoctorAvailable } from "../DoctorAvailable/entity";
import { Service } from "../Service/entity";

@Entity()
export class Doctor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
  @ManyToOne(() => Service, (service) => service.doctors)
  service: Service;

  @OneToMany(() => DoctorAvailable, (doctorAvailable) => doctorAvailable.doctor)
  doctorAvailables: DoctorAvailable[];

  @OneToMany(() => Consultation, (consultation) => consultation.doctor)
  consultations: Consultation[];
}
