import ApiError from "../../helpers/ApiError.js";

class ServiceController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  add= async (req, res, next) => {
    try {
        const service = await this.#models.Service.create({ ...req.body });
        res.status(201).json(service);
    } catch (err) {
        next(err);
    }
}

getOne= async (req, res, next) => {
    const id=req.body.id;
    const service = await this.#models.Service.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!service) {
         throw new ApiError("Ressource not exists");
     }

     res.status(201).json(service);
 }

 update= async (req, res, next,id, data) => {
    const serviceFound = await this.#models.Service.findOne({
      where: { id },
    });
    if (!serviceFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await serviceFound.update(data);

    const service = await this.#models.Service.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    res.status(201).json(service);
  }
   
  delete= async (req, res, next,id, data) => {
    const serviceFound = await this.#models.Service.findOne({
      where: { id },
    });
    if (!serviceFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await serviceFound.delete();

    res.status(201).json(serviceFound);
}
  }





export default ServiceController;