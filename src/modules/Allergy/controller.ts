

import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IAllergyService } from "./service";
import { auth } from "../../middlewares";
@Controller('allergy')
class AllergyController {
	public allergyService: any;
	public jwtService: any;
	public secret: any;
  
  constructor(allergyService:IAllergyService, jwtService:JwtService) {
    this.allergyService = allergyService;
    this.jwtService = jwtService;
  }
   
   
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const allergyData = req.body;
      // allergyData.password = bcrypt.hashSync(req.body.password, salt);
      //const allergy = await this.#models.Allergy.create({ ...allergyData });
      const allergy = await this.allergyService.register({ ...req.body });
      res.status(201).json(allergy);
    } catch (err) {
      next(err);
    }
  };

  
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const allergy = await this.allergyService.getOne({ ...req.body });

      res.status(201).json(allergy);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const allergy = await this.allergyService.update({ ...req.body });

      res.status(201).json(allergy);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const allergy = await this.allergyService.delete({ ...req.body });

      res.status(201).json(allergy);
    } catch (err) {
      next(err);
    }
  };
}

export default AllergyController;
