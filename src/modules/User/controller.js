import ApiError from "../../helpers/ApiError.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class UserController {
  #models;
  constructor(models) {
    this.#models = models;
    this.secret="aa";
  }
  compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);

  login = async (req, res, next) => {
    try {
      //const newPatient = await this.#models.Patient.findOne();
      const userData = req.body;
      if (!userData.email || !userData.password)
        throw new ApiError(400, 'Missing required email and password fields');
      const user = await this.findByEmail(userData)
      if (!user)
       throw new ApiError(400, 'User with the specified email does not exists');
     const passwordMatch = await this.compareHash(userData.password, user.password);
     if (!passwordMatch)
       throw new ApiError(400, 'User password do not match');

     const token =  await jwt.sign({ id: user.id }, this.secret);
     res.cookie('auth-cookie', token, {expiresIn: '30d'});

      res.status(200).json(user);
    } catch (error) {
      console.log(error)
      next(error);
    }
  };

add= async (req, res, next) => {
    try {
       const salt = bcrypt.genSaltSync(10);
        const userData = req.body;
        userData.password = bcrypt.hashSync(req.body.password, salt);
        const user = await this.#models.User.create({ ...userData });
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}

async findByEmail(userEntity) {
  return await this.#models.User.findOne({where: {email: userEntity.email}});
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