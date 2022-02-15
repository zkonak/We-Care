import ApiError from "../../helpers/ApiError.js";

class DrugPrescriptionController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  add= async (req, res, next) => {
    try {
        const drugPrescription = await this.#models.DrugPrescription.create({ ...req.body });
        res.status(201).json(drugPrescription);
    } catch (err) {
        next(err);
    }
}

getOne= async (req, res, next) => {
    const id=req.body.id;
    const drugPrescription = await this.#models.DrugPrescription.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!drugPrescription) {
         throw new ApiError("Ressource not exists");
     }

     res.status(201).json(drugPrescription);
 }

 update= async (req, res, next,id, data) => {
    const drugPrescriptionFound = await this.#models.DrugPrescription.findOne({
      where: { id },
    });
    if (!drugPrescriptionFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await drugPrescriptionFound.update(data);

    const drugPrescription = await this.#models.DrugPrescription.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    res.status(201).json(drugPrescription);
  }
   
  delete= async (req, res, next,id, data) => {
    const drugPrescriptionFound = await this.#models.DrugPrescription.findOne({
      where: { id },
    });
    if (!drugPrescriptionFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await drugPrescriptionFound.delete();

    res.status(201).json(drugPrescriptionFound);
}
  }





export default DrugPrescriptionController;