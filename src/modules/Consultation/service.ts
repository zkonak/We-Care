import ConsultationDtO from "./dto";
import { ApiError } from "../../helpers/ApiError";
import { Consultation } from "./entity";
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
  async delete(consultationData: Consultation): Promise<string> {
    // const consultation = await this.consultationRepository.findOne(
    //   consultationId
    // );
    // if (!consultation) {
    //   throw new Error("consultation introuvable ou déjà supprimée.");
    // }
    return await this.consultationRepository.delete(consultationData);
  }
  async getOne(consultationData: Consultation) {
    const consultation = await this.consultationRepository.findOne(
      consultationData.id
    );
    if (!consultation) {
      //throw new ApiError("Ressource not exists");
    }
    return consultation;
  }

  async getAllByDoctor(id: any): Promise<Consultation[]> {
    const consultations = await this.consultationRepository.getAllConsultation(
      id
    );
    return consultations.map(
      (consultation: Consultation) => new Consultation()
    );
  }

  async update(consultationData: Consultation) {
    const consultation = await this.getOne(consultationData);
    console.log("consultation", consultation);
    const consultationUpdated = await this.consultationRepository.update(
      consultationData
    );
    console.log("gggggggggg", consultationUpdated);
    return consultationUpdated;
  }

  async getAll() {
    const consultations = await this.consultationRepository.findAll();
    return consultations;
  }

  async register(consultationData: Consultation) {
    if (!ConsultationDtO) {
      throw new ApiError(400, "consultation validation failed");
    }
    const dataConsultation = await this.consultationRepository.addConsultation(
      consultationData
    );

    return dataConsultation;
  }
}

export default ConsultationService;
