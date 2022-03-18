
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity, JoinTable } from "typeorm";
import { Allergy } from "../Allergy/entity";
// import { } from "../Prescription/model";
import { Prescription } from "../Prescription/entity";

@Entity()
export class Drug extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @ManyToMany(() => Prescription, prescription => prescription.drug)
    @JoinTable({ name: 'drug_prescription' })
  prescription: Prescription[];
 

  @ManyToMany(() => Allergy, allergy => allergy.drug) // match ID pour trouver les drugs liés aux allergie
  @JoinTable({ name: 'drug_allergy' })

allergy: Allergy[];



}