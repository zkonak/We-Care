
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IUserService } from "./service";
import { auth } from "../../middlewares";
@Controller('users')
class UserController {
	public userService: any;
	public jwtService: any;
	public secret: any;
  
  constructor(userService:IUserService, jwtService:JwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }
  compareHash = async (password:any, hash:any) =>
    await bcrypt.compareSync(password, hash);
  
    @Post('login')
  login = async (req:Request, res:Response, next:NextFunction) => {
    try {
     
      const user = await this.userService.login({ ...req.body });
      const token = await jwt.sign({ id: user.id }, this.secret);
      res.cookie('auth-cookie', token, {expires: new Date(Date.now() + (30 * 86400 * 1000))});

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
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

  async findByEmail(userEntity:any) {
    // return await this.#models.User.findOne({
    //   where: { email: userEntity.email },
    // });
    return await this.userService.findByEmail(userEntity);
    //res.status(201).json(user);
  }
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const user = await this.userService.getOne({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const user = await this.userService.update({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const user = await this.userService.delete({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
