import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Service } from "../Service/entity";

@Entity()
export class Doctor extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
    @ManyToOne(() => Service, service => service.doctors)
    service: Service

}