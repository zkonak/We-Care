import ConsultationDtO from "../../modules/Consultation/dto";
import { Consultation } from "../../modules/Consultation/entity";

export interface IConsultationService {
  getAll(): Promise<ConsultationDtO[]>;
  getOne(consultationData: Consultation): Promise<ConsultationDtO>;
  add(consultationData: Consultation): Promise<ConsultationDtO>;
  //update(consultationEntity: Consultation): Promise<ConsultationDtO>;
  //   delete(consultationData: Consultation): Promise<ConsultationDtO>;
}

export interface IConsultationRepository {
  //   delete(consultation: Consultation): Promise<Consultation | undefined>;
  //  update(consultation: Consultation): Promise<Consultation>;
  findAll(): Promise<Consultation[]>;
  addConsultation(consultation: Consultation): Promise<Consultation>;
  findOne(id: number): Promise<Consultation | undefined>;
}
