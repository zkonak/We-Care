import ApiError from "../../helpers/ApiError.js";

class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  login = async (req, res, next) => {
    try {
      //const newPatient = await this.#models.Patient.findOne();
      if (true) throw new ApiError("error message", 403);

      res.status(200).json("youpi");
    } catch (error) {
      next(error);
    }
  };



  add= async (req, res, next) => {
    try {
        const user = await this.#models.User.create({ ...req.body });
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}

getOne= async (req, res, next) => {
    const id=req.body.id;
    const user = await this.#models.User.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!user) {
         throw new ApiError("Ressource not exists");
     }

     res.status(201).json(user);
 }

 update= async (req, res,id, data) => {
    const userFound = await this.#models.User.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await userFound.update(data);

    const user = await this.#models.User.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    res.status(201).json(user);
  }
   
  delete= async (req, res, next,id) => {
    const userFound = await this.#models.User.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await userFound.delete();

    res.status(201).json(userFound);
}
  }










export default UserController;