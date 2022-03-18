import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Drug } from "../Drug/entity";


@Entity()
export class Prescription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Drug, drug => drug.prescription)
  drug: Drug[];
    
  

}