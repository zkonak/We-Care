import ConsultationDTO from "./dto";
import { ApiError } from "../../helpers/ApiError";

class ConsultationService {
  constructor(consultationRepository) {
    this.consultationRepository = consultationRepository;
  }
  async getAll() {
    const consultations = await this.consultationRepository.findAll();
    return consultations.map((consultation) => {
      new ConsultationDTO(consultation);
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

    res.status(201).json(consultation);
  };

  async add(consultationData) {
    if (!consultationData) {
      throw new ApiError(400, "consultation validation failed");
    }
    const consultation = await this.consultationRepository.addNew(
      consultationData
    );
    return new ConsultationDTO(consultation);
  }
  update = async (req, res, next, id, data) => {
    const consultationFound = await this.consultationRepository.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }

    await consultationFound.update(data);

    const consultation = await this.consultationService.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["dateCreated"] },
    });

    res.status(201).json(consultation);
  };
  delete = async (req, res, next, id, data) => {
    const consultationFound = await this.consultationService.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }
    await consultationFound.delete();
    res.status(201).json(consultationFound);
  };
}

export default ConsultationService;
