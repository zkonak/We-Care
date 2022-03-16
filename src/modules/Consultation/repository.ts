import { EntityRepository, EntityManager } from "typeorm";
import ConsultationDtO from "./dto";
import { Consultation } from "./entity";
export interface IConsultationRepository {
  //   delete(consultation: Consultation): Promise<Consultation | undefined>;
  //   update(consultation: Consultation): Promise<Consultation | undefined>;
  findAll(): Promise<Consultation[]>;
  addConsultation(consultation: Consultation): Promise<Consultation>;
  findOne(id: number): Promise<Consultation | undefined>;
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
  async findOne(id: number) {
    return await this.manager.findOne(Consultation, {
      where: { id: id },
    });
  }
  async update(userEntity: any) {
    //return await this.manager.update(User,userEntity);
  }
}
export default ConsultationRepository;
