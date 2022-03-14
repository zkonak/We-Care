
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IServiceService } from "./service";
import { auth } from "../../middlewares";
@Controller('services')
class ServiceController {
	public serviceService: any;
	public jwtService: any;
	//public secret: any;
  
  constructor(serviceService:IServiceService, jwtService:JwtService) {
    this.serviceService = serviceService;
    this.jwtService = jwtService;
  }
  compareHash = async (password:any, hash:any) =>
    await bcrypt.compareSync(password, hash);
  
    @Post('login')
  login = async (req:Request, res:Response, next:NextFunction) => {
    try {
     
      const service = await this.serviceService.login({ ...req.body });
      const token = await jwt.sign({ id: service.id }, this.jwtService.secret);
      res.cookie('auth-cookie', token, {expires: new Date(Date.now() + (30 * 86400 * 1000))});

      res.status(200).json(service);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const serviceData = req.body;
      // serviceData.password = bcrypt.hashSync(req.body.password, salt);
      //const service = await this.#models.Service.create({ ...serviceData });
      const service = await this.serviceService.register({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  async findByEmail(serviceEntity:any) {
    // return await this.#models.Service.findOne({
    //   where: { email: serviceEntity.email },
    // });
    return await this.serviceService.findByEmail(serviceEntity);
    //res.status(201).json(service);
  }
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const service = await this.serviceService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const service = await this.serviceService.update({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const service = await this.serviceService.delete({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };
}

export default ServiceController;
