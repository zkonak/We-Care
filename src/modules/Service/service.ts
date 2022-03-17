import ServiceDTO from "./dto";
import { IServiceRepository } from "./repository";
import { ApiError } from "../../helpers/ApiError";





export interface IServiceService {
  getAll() : Promise<ServiceDTO[]>
  register(serviceData: any) : Promise<ServiceDTO>
  
  findById(id:any):Promise<ServiceDTO>
  getOne(serviceData:any):Promise<ServiceDTO>
  update(serviceData:any):Promise<ServiceDTO>
  delete(serviceData:any):Promise<ServiceDTO>

}


class ServiceService implements IServiceService {
	public serviceRepo: any;
	public mailerService: any;

  constructor(serviceRepository:IServiceRepository, mailerService:any) {
    this.serviceRepo = serviceRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const services = await this.serviceRepo.findAll();
    return services.map((service:any) => new ServiceDTO(service));
  }

  async register(serviceData:any) {
    if (!serviceData.name)
      throw new ApiError(400, "Missing required Service Name");

    const newService = await this.serviceRepo.addNew(serviceData);
   // await this.mailerService.sendMail(serviceData);
    return new ServiceDTO(newService);
  }

  


  async findById(id:any) {
    return await this.serviceRepo.findOne(id);
  }

  async getOne(serviceData:any): Promise<ServiceDTO> {
    const service = await this.serviceRepo.findOne(serviceData);
    if (!service) {
      //throw new ApiError("Ressource not exists");
    }
    return new ServiceDTO(service);
  }

  async update(serviceData:any) {
    const service = await this.getOne(serviceData);
    const serviceUpdated = this.serviceRepo.update(service);
    return new ServiceDTO(serviceUpdated);
  }
  async delete(serviceData:any) {
    const service = await this.getOne(serviceData);
    const serviceDeleted = this.serviceRepo.delete(service);
    return new ServiceDTO(serviceDeleted);
  }
}

export default ServiceService;
