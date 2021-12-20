import ApiError from "../../helpers/ApiError.js";

class DrugController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  add= async (req, res, next) => {
    try {
        const drug = await this.#models.Drug.create({ ...req.body });
        res.status(201).json(drug);
    } catch (err) {
        next(err);
    }
}

getOne= async (req, res, next) => {
    const id=req.body.id;
    const drug = await this.#models.Drug.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!drug) {
         throw new ApiError("Ressource not exists");
     }

     res.status(201).json(drug);
 }

 update= async (req, res, next,id, data) => {
    const drugFound = await this.#models.Drug.findOne({
      where: { id },
    });
    if (!drugFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await drugFound.update(data);

    const drug = await this.#models.Drug.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    res.status(201).json(drug);
  }
   
  delete= async (req, res, next,id, data) => {
    const drugFound = await this.#models.Drug.findOne({
      where: { id },
    });
    if (!drugFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await drugFound.delete();

    res.status(201).json(drugFound);
}
  }





export default DrugController;