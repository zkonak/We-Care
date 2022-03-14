import ConsultationDtO from "./dto";
import { ApiError } from "../../helpers/ApiError";
import { IConsultationRepository } from "./repository";
import { Consultation } from "./entity";
import { NextFunction, Request, Response } from "express";

export interface IConsultationService {
  getAll(): Promise<ConsultationDtO[]>;
  getOne(consultationData: Consultation): Promise<ConsultationDtO>;
  add(consultationData: ConsultationDtO): Promise<ConsultationDtO>;
  update(consultationData: Consultation): Promise<ConsultationDtO>;
  delete(consultationData: Consultation): Promise<ConsultationDtO>;
}

class ConsultationService implements IConsultationService {
  private consultationRepository;

  constructor(consultationRepository: IConsultationRepository) {
    this.consultationRepository = consultationRepository;
  }
  ////////
  async getAll() {
    const consultations = await this.consultationRepository.findAll();
    return consultations.map((consultation: any) => new ConsultationDtO(consultation)
    );
  }
//////////
  async getOne( consultationData: Consultation): Promise<ConsultationDtO> {

 const consultation = await this.consultationRepository.findOne(consultationData ), 
if (!consultation) {
      throw new Error("Ressource not exists");
    }

    return new ConsultationDtO(consultation);
  }

  ////////
async add(consultationData: ConsultationDtO): Promise<ConsultationDtO> {
    if (!ConsultationDtO) {
      throw new ApiError(400, "consultation validation failed")}
    const dataConsultation = await this.consultationRepository.addConsultation(consultationData)
    
    return  dataConsultation;
  }

  ////////
  async update(consultationData: Consultation ): Promise<ConsultationDtO> {
const consultationFound = await this.consultationRepository.findOne(consultationData)
    
    if (!consultationFound) {
      throw new Error("Ressource not exists");
    }

    }

  ///////
async delete(consultationData: Consultation ): Promise<ConsultationDtO> <unknown>{
      const: consultationFound = await this.consultationRepository.findOne({
          where: { id },
      }),
      if(, consultationFound) {
          throw new ApiError("Ressource not exists");
      },
      await: consultationFound.delete(),
      return: new ConsultationDtO()
  }
}

export default ConsultationService;
      