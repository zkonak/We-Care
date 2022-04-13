
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IPatientDocumentService } from "./service";
import { auth } from "../../middlewares";
import multer from "multer";

var storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, './uploads');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , file.originalname);   
  }
});
var upload = multer({ storage: storage }).single("document");
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
      let document:any={};
      upload(req, res,async (err) => {
        if(err) {
          res.status(400).send("Something went wrong!");
        }
         document=req.file;
     
       
      req.body.document=document.filename;
      
      const patientDocument = await this.patientDocumentService.register({ ...req.body });
       res.status(201).json(patientDocument);
      });
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
     

      // Delete the file like normal
      
  
     
      res.status(201).json(patientDocument);
    } catch (err) {
      next(err);
    }
  };
}

export default PatientDocumentController;
