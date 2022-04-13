import { EntityRepository, EntityManager } from "typeorm";
import { IConsultationRepository } from "../../helpers/Interfaces/consultation.interfaces";
import ConsultationDtO from "./dto";
import { Consultation } from "./entity";

@EntityRepository()
class ConsultationRepository implements IConsultationRepository {
  constructor(private manager: EntityManager) {}

  async delete(consultationData: Consultation): Promise<string> {
    await this.manager.delete(Consultation, consultationData);
    return `Consultation n°${consultationData.id} supprimée.`;
  }

  async findOne(id: number) {
    return await this.manager.findOne(Consultation, { where: { id: id } });
  }

  async addConsultation(consultation: Consultation): Promise<Consultation> {
    return await this.manager.save(Consultation, consultation);
  }
  async findAll(): Promise<Consultation[]> {
    return await this.manager.find(Consultation);
  }

  async update(consultation: Partial<Consultation>) {
    return await this.manager.update(Consultation, consultation.id, {
      ...consultation,
    });
  }

  async getAllConsultation(doctorId: number): Promise<Consultation[]> {
    throw new Error("Method not implemented.");
  }
}
export default ConsultationRepository;
