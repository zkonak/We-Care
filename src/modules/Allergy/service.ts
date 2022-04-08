import AllergyDTO from "./dto";
import { IAllergyRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IAllergyService {
  getAll() : Promise<AllergyDTO[]>
  register(allergyData: any) : Promise<AllergyDTO>
  
  getOne(allergyData:any):Promise<AllergyDTO>
  update(allergyData:any):Promise<AllergyDTO>
  delete(allergyData:any):Promise<AllergyDTO>

}


class AllergyService implements IAllergyService {
	public allergyRepo: any;
	public mailerService: any;

  constructor(allergyRepository:IAllergyRepository, mailerService:any) {
    this.allergyRepo = allergyRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const allergys = await this.allergyRepo.findAll();
    return allergys.map((allergy:any) => new AllergyDTO(allergy));
  }

  async register(allergyData:any) {
   
    const newAllergy = await this.allergyRepo.addNew(allergyData);
   
    return new AllergyDTO(newAllergy);
  }

 


  async getOne(allergyData:any): Promise<AllergyDTO> {
    const allergy = await this.allergyRepo.findOne(allergyData);
    if (!allergy) {
      //throw new ApiError("Ressource not exists");
    }
    return new AllergyDTO(allergy);
  }

  async update(allergyData:any) {
    const allergy = await this.getOne(allergyData);
    const allergyUpdated = this.allergyRepo.update(allergy);
    return new AllergyDTO(allergyUpdated);
  }
  async delete(allergyData:any) {
    const allergy = await this.getOne(allergyData);
    const allergyDeleted = this.allergyRepo.delete(allergy);
    return new AllergyDTO(allergyDeleted);
  }
}

export default AllergyService;
