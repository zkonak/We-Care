import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Doctor } from "../Doctor/entity";


@Entity()
export class DoctorAvailable extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Doctor, doctor => doctor.doctorAvailables)
    doctor: Doctor

    @Column()
    date:Date

    @Column('time', {name: 'timeStart'})
    timeStart: Date

    @Column('time', {name: 'timeFinish'})
    timeFinish: Date

}