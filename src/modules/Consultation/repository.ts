import { EntityRepository, EntityManager } from "typeorm";
import { IConsultationRepository } from "../../helpers/Interfaces/consultation.interfaces";
import ConsultationDtO from "./dto";
import { Consultation } from "./entity";

@EntityRepository()
class ConsultationRepository implements IConsultationRepository {
  constructor(private manager: EntityManager) {}

  async findAll(): Promise<Consultation[]> {
    return await this.manager.find(Consultation);
  }
  async addConsultation(consultation: Consultation): Promise<Consultation> {
    return await this.manager.save(consultation);
  }
  async findOne(id: number) {
    return await this.manager.findOne(Consultation, {
      where: { id: id },
    });
  }
  //   async update(consultationData: Consultation) {
  // const consultation= await this.manager.update(Consultation,consultationData);
  //   }
}
export default ConsultationRepository;
