import { EntityRepository, EntityManager } from "typeorm";
import { IConsultationRepository } from "../../helpers/Interfaces/consultation.interfaces";
import ConsultationDtO from "./dto";
import { Consultation } from "./entity";

@EntityRepository()
class ConsultationRepository implements IConsultationRepository {
  constructor(private manager: EntityManager) {}

  async delete(consultationId: number): Promise<string> {
    await this.manager.delete(Consultation, consultationId);
    return `Consultation n°${consultationId} supprimée.`;
  }

  async findOne(id: any) {
    return await this.manager.findOne(Consultation, { where: { id: id } });
  }

  async addConsultation(consultation: Consultation): Promise<Consultation> {
    return await this.manager.save(Consultation, consultation);
  }
  async findAll(): Promise<Consultation[]> {
    return await this.manager.find(Consultation);
  }
  async getAllConsultation(doctorId: number): Promise<Consultation[]> {
    throw new Error("Method not implemented.");
  }

  update(consultation: Consultation): Promise<Consultation> {
    throw new Error("Method not implemented.");
  }
}
export default ConsultationRepository;
