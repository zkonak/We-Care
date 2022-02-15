import ConsultationDtO from "./dto";
import { ApiError } from "../../helpers/ApiError";
import { IConsultationRepository } from './repository';


export interface IConsultationService{
    getAll():Promise<ConsultationDtO[]>
    getOne():Promise<ConsultationDtO>
    add(consultationData:ConsultationDto):Promise<ConsultationDtO>


}

class ConsultationService {
  constructor(consultationRepository:IConsultationRepositort) {
    this.consultationRepository = consultationRepository;
  }
  async getAll() {
    const consultations = await this.consultationRepository.findAll();
    return consultations.map((consultation) => {
      new ConsultationDtO(consultation);
    });
  }
  getOne = async (req, res, next) => {
    const id = req.body.id;

    const consultation = await this.consultationRepository.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!consultation) {
      throw new ApiError("Ressource not exists");
    }

    return new ConsultationDtO (consultation);
  };

  async add(consultationData:ConsultationDto) {
    if (!consultationData) {
      throw new ApiError(400, "consultation validation failed");
    }
    const consultation = await this.consultationRepository.addNew(
      consultationData
    );
    return new ConsultationDtO(consultation);
  }
  update = async (req, res, next, id, data) => {
    const consultationFound = await this.consultationRepository.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }

    await consultationFound.update(data);

    const consultation = await this.consultationRepository.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["dateCreated"] },
    });

    return new ConsultationDtO(consultation);
  };
  delete = async (req, res, next, id, data) => {
    const consultationFound = await this.consultationRepository.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }
    await consultationFound.delete();
    return new ConsultationDtO;
  };
}

export default ConsultationService;
