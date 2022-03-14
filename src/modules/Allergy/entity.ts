import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";


@Entity()
export class Allergy extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
  

}