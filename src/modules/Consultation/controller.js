import ApiError from "../../helpers/ApiError.js";

class ConsultationController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  add= async (req, res, next) => {
    try {
        const consultation = await this.#models.Consultation.create({ ...req.body });
        res.status(201).json(consultation);
    } catch (err) {
        next(err);
    }
}

getOne= async (req, res, next) => {
    const id=req.body.id;
    const consultation = await this.#models.Consultation.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!consultation) {
         throw new ApiError("Ressource not exists");
     }

     res.status(201).json(consultation);
 }

 update= async (req, res, next,id, data) => {
    const consultationFound = await this.#models.Consultation.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await consultationFound.update(data);

    const consultation = await this.#models.Consultation.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    res.status(201).json(consultation);
  }
   
  delete= async (req, res, next,id, data) => {
    const consultationFound = await this.#models.Consultation.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await consultationFound.delete();

    res.status(201).json(consultationFound);
}
  }





export default ConsultationController;