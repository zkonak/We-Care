import ApiError from "../../helpers/ApiError.js";

class PrescriptionController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  add= async (req, res, next) => {
    try {
        const prescription = await this.#models.Prescription.create({ ...req.body });
        res.status(201).json(prescription);
    } catch (err) {
        next(err);
    }
}

getOne= async (req, res, next) => {
    const id=req.body.id;
    const prescription = await this.#models.Prescription.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!prescription) {
         throw new ApiError("Ressource not exists");
     }

     res.status(201).json(prescription);
 }

 update= async (req, res, next,id, data) => {
    const prescriptionFound = await this.#models.Prescription.findOne({
      where: { id },
    });
    if (!prescriptionFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await prescriptionFound.update(data);

    const prescription = await this.#models.Prescription.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    res.status(201).json(prescription);
  }
   
  delete= async (req, res, next,id, data) => {
    const prescriptionFound = await this.#models.Prescription.findOne({
      where: { id },
    });
    if (!prescriptionFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await prescriptionFound.delete();

    res.status(201).json(prescriptionFound);
}
  }





export default PrescriptionController;