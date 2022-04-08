
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IDoctorAvailableService } from "./service";
import { auth } from "../../middlewares";
@Controller('doctorAvailables')
class DoctorAvailableController {
	public doctorAvailableService: any;
	public jwtService: any;
	public secret: any;
  
  constructor(doctorAvailableService:IDoctorAvailableService, jwtService:JwtService) {
    this.doctorAvailableService = doctorAvailableService;
    this.jwtService = jwtService;
  }
   
   
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const doctorAvailableData = req.body;
      // doctorAvailableData.password = bcrypt.hashSync(req.body.password, salt);
      //const doctorAvailable = await this.#models.DoctorAvailable.create({ ...doctorAvailableData });
      const doctorAvailable = await this.doctorAvailableService.register({ ...req.body });
      res.status(201).json(doctorAvailable);
    } catch (err) {
      next(err);
    }
  };

  
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const doctorAvailable = await this.doctorAvailableService.getOne({ ...req.body });

      res.status(201).json(doctorAvailable);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const doctorAvailable = await this.doctorAvailableService.update({ ...req.body });

      res.status(201).json(doctorAvailable);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const doctorAvailable = await this.doctorAvailableService.delete({ ...req.body });

      res.status(201).json(doctorAvailable);
    } catch (err) {
      next(err);
    }
  };
}

export default DoctorAvailableController;
