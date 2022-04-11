
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IPatientDocumentService } from "./service";
import { auth } from "../../middlewares";
@Controller('patientDocuments')
class PatientDocumentController {
	public patientDocumentService: any;
	public jwtService: any;
	public secret: any;
  
  constructor(patientDocumentService:IPatientDocumentService, jwtService:JwtService) {
    this.patientDocumentService = patientDocumentService;
    this.jwtService = jwtService;
  }
   
   
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      console.log("doccc",req.body.file);
       const patientDocument = await this.patientDocumentService.register({ ...req.body });
      res.status(201).json(patientDocument);
    } catch (err) {
      next(err);
    }
  };

  
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const patientDocument = await this.patientDocumentService.getOne({ ...req.body });

      res.status(201).json(patientDocument);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const patientDocument = await this.patientDocumentService.update({ ...req.body });

      res.status(201).json(patientDocument);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const patientDocument = await this.patientDocumentService.delete({ ...req.body });

      res.status(201).json(patientDocument);
    } catch (err) {
      next(err);
    }
  };
}

export default PatientDocumentController;
