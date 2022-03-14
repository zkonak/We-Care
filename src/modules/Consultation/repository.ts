import { EntityRepository, EntityManager } from "typeorm";
import { Consultation } from "./entity";
export interface IConsultationRepository {
  findAll(): Promise<Consultation[]>;
  addConsultation(consultation: Consultation): Promise<Consultation>;
  findById(id: number): Promise<Consultation | undefined>;
}
@EntityRepository()
class ConsultationRepository implements IConsultationRepository {
  constructor(private manager: EntityManager) {}

  async findAll(): Promise<Consultation[]> {
    return await this.manager.find(Consultation);
  }
  async addConsultation(consultation: Consultation): Promise<Consultation> {
    return await this.manager.save(consultation);
  }
  async findById(id: number) {
    const patient = await this.manager.findOne(Consultation, id);
    return patient?.consultation;
  }
}
