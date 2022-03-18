import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Drug } from "../Drug/entity";


@Entity()
export class Allergy extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;

    @ManyToMany(() => Drug, drug => drug.allergy)
 
  drug: Drug[];
  

}