import ConsultationDtO from "../../modules/Consultation/dto";
import { Consultation } from "../../modules/Consultation/entity";

export interface IConsultationService {
  getOne(consultationData: Consultation): Promise<Consultation | undefined>;
  register(consultationData: Consultation): Promise<Consultation>;
  getAll(): Promise<Consultation[]>;
  update(consultationData: Consultation): Promise<Consultation>;
  delete(consultationData: Consultation): Promise<string>;
}

export interface IConsultationRepository {
  findOne(id: any): Promise<Consultation | undefined>;
  getAllConsultation(id: number): Promise<Consultation[]>; //getByDoctor
  delete(consultationData: Consultation): Promise<string>;
  update(consultation: Consultation): Promise<Consultation>;
  findAll(): Promise<Consultation[]>;
  addConsultation(consultation: Consultation): Promise<Consultation>;
}
