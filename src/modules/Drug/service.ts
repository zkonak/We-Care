import DrugDTO from "./dto";
import { IDrugRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";


export interface IDrugService {
  getAll() : Promise<DrugDTO[]>
  register(allergyData: any) : Promise<DrugDTO>
  getOne(allergyData:any):Promise<DrugDTO>
  update(allergyData:any):Promise<DrugDTO>
  delete(allergyData:any):Promise<DrugDTO>

}


class DrugService implements IDrugService {
	public drugRepo: any;


  constructor(drugRepository:IDrugRepository) {
    this.drugRepo = drugRepository;
    
  }

  async getAll() {
    const drugs = await this.drugRepo.findAll();
    return drugs.map((drug:any) => new DrugDTO(drug));
  }

  async register(drugData:any) {
   
    const newDrug = await this.drugRepo.addNew(drugData);
   
    return new DrugDTO(newDrug);
  }

 
  async getOne(drugData:any): Promise<DrugDTO> {
    const drug = await this.drugRepo.findOne(drugData);
    if (!drug) {
      //throw new ApiError("Ressource not exists");
    }
    return new DrugDTO(drug);
  }

  async update(drugData:any) {
    const drug = await this.getOne(drugData);
    const drugUpdated = this.drugRepo.update(drug);
    return new DrugDTO(drugUpdated);
  }
  async delete(drugData:any) {
    const drug = await this.getOne(drugData);
    const drugDeleted = this.drugRepo.delete(drug);
    return new DrugDTO(drugDeleted);
  }
}

export default DrugService;
