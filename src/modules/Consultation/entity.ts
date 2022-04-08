import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Patient } from "../Patient/entity";

@Entity()
export class Consultation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  hour: string;
  @Column()
  valid: boolean;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updated_at: Date;

  //   @OneToMany(() => Patient, (patient) => patient.consultation)
  //   patients: Patient[];

  //   @OneToMany(() => Doctor, (doctor) => doctor.consultation)
  //  doctor: Doctor[];
}
