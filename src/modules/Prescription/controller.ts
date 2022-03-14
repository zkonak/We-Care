
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IPrescriptionService } from "./service";
import { auth } from "../../middlewares";
@Controller('prescriptions')
class PrescriptionController {
	public prescriptionService: any;
	public jwtService: any;
	public secret: any;
  
  constructor(prescriptionService:IPrescriptionService, jwtService:JwtService) {
    this.prescriptionService = prescriptionService;
    this.jwtService = jwtService;
  }
   
   
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const prescriptionData = req.body;
      // prescriptionData.password = bcrypt.hashSync(req.body.password, salt);
      //const prescription = await this.#models.Prescription.create({ ...prescriptionData });
      const prescription = await this.prescriptionService.register({ ...req.body });
      res.status(201).json(prescription);
    } catch (err) {
      next(err);
    }
  };

  
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const prescription = await this.prescriptionService.getOne({ ...req.body });

      res.status(201).json(prescription);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const prescription = await this.prescriptionService.update({ ...req.body });

      res.status(201).json(prescription);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const prescription = await this.prescriptionService.delete({ ...req.body });

      res.status(201).json(prescription);
    } catch (err) {
      next(err);
    }
  };
}

export default PrescriptionController;
