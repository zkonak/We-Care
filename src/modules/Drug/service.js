import DrugDTO from "./dto";
import { ApiError } from "../../helpers/error";

class DrugService {
  constructor(drugRepository) {
    this.drugRepo = drugRepository;
  }

  async getAll() {
    const drugs = await this.drugRepo.findAll();
    return drugs.map((user) => new DrugsDTO(drug));
  }

  async add(drugData) {
    const drugFound = await this.drugRepo.findbyName(drugData);
    if (!drugFound) throw new ApiError(400, "Drug already exists");

    const drug = await this.drugRepo.addNew(drugData);

    return new DrugDTO(drug);
  }

  async update(drugData) {
    const drugFound = await this.drugRepo.findbyName(drugData);
    if (drugFound) throw new ApiError(400, "Drug doesn't exists");

    const drug = await this.drugRepo.delete(drugData);

    return new DrugDTO(drug);
    
  }

  async delete(drugData) {
    const drugFound = await this.drugRepo.findbyName(drugData);
    if (drugFound) throw new ApiError(400, "Drug doesn't exists");

    const drug = await this.drugRepo.delete(drugData);

    return new DrugDTO(drug);
    
  }


}

export default UserService;

//validation et creation objet data
