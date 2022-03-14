import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Doctor } from "../Doctor/entity";

@Entity()
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @OneToMany(() => Doctor, doctor => doctor.service)
    doctors: Doctor[];
  

}