import ApiError from "../../helpers/ApiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserController {
	public userService: any;
	public jwtService: any;
	public secret: any;
  //#models;
  // constructor(models) {
  //   this.#models = models;
  //   this.secret = "aa";
  // }
  constructor(userService, jwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }
  compareHash = async (password, hash) =>
    await bcrypt.compareSync(password, hash);

  login = async (req, res, next) => {
    try {
      //const newPatient = await this.#models.Patient.findOne();
      //   const userData = req.body;
      //   if (!userData.email || !userData.password)
      //     throw new ApiError(400, 'Missing required email and password fields');
      //   const user = await this.findByEmail(userData)
      //   if (!user)
      //    throw new ApiError(400, 'User with the specified email does not exists');
      //  const passwordMatch = await this.compareHash(userData.password, user.password);
      //  if (!passwordMatch)
      //    throw new ApiError(400, 'User password do not match');
      const user = await this.userService.login({ ...req.body });
      const token = await jwt.sign({ id: user.id }, this.secret);
      res.cookie("auth-cookie", token, { expiresIn: "30d" });

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  add = async (req, res, next) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const userData = req.body;
      // userData.password = bcrypt.hashSync(req.body.password, salt);
      //const user = await this.#models.User.create({ ...userData });
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  async findByEmail(userEntity) {
    // return await this.#models.User.findOne({
    //   where: { email: userEntity.email },
    // });
    return await this.userService.findByEmail({ ...req.body });
    //res.status(201).json(user);
  }

  getOne = async (req, res, next) => {
    try {
      const user = await this.userService.getOne({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const user = await this.userService.update({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const user = await this.userService.delete({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
