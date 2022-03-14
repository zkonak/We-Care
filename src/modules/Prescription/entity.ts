import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";


@Entity()
export class Prescription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

  

}