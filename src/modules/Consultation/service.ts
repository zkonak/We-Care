import ConsultationDtO from "./dto";
import { ApiError } from "../../helpers/ApiError";
import { Consultation } from "./entity";
import { NextFunction, Request, Response } from "express";
import {
  IConsultationRepository,
  IConsultationService,
} from "../../helpers/Interfaces/consultation.interfaces";

class ConsultationService implements IConsultationService {
  private consultationRepository;
  consultation: any;

  constructor(consultationRepository: IConsultationRepository) {
    this.consultationRepository = consultationRepository;
  }

  ////////
  async getAll() {
    const consultations = await this.consultationRepository.findAll();
    return consultations.map(
      (consultation: any) => new ConsultationDtO(consultation)
    );
  }
  //////////
  async getOne(consultationData: Consultation): Promise<ConsultationDtO> {
    const consultation = await this.consultationRepository.findOne(
      consultationData.id
    );
    return new this.consultation(ConsultationDtO);
  }

  ////////
  async add(consultationData: Consultation) {
    if (!ConsultationDtO) {
      throw new ApiError(400, "consultation validation failed");
    }
    const dataConsultation = await this.consultationRepository.addConsultation(
      consultationData
    );

    return dataConsultation;
  }

  //////
  //   async update(consultationData: Consultation) {
  //     const consultationdd = await this.getOne(consultationData);
  //     const consultationUpdated = await this.consultationRepository.update(
  //       this.consultation
  //     );
  //     return new ConsultationDtO(consultationUpdated);
  //   }

  ///////
  //   async delete(consultationData: Consultation) {
  //     const consultation = await this.getOne(consultationData);
  //     const consultationDeleted =
  //       this.consultationRepository.delete(consultation);
  //     return new ConsultationDtO(consultationDeleted);
  //   }
}

export default ConsultationService;
