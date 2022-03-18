
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import DrugService, { IDrugService } from "./service";
import { auth } from "../../middlewares";
@Controller('drugs')


class DrugController {

  public drugService: any;
	public jwtService: any;

  constructor(drugService: IDrugService) {
    this.drugService = drugService;
    
  }

  getAll = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let drugs = await this.drugService.getAll();
        res.status(200).json(drugs);
    } catch (err) {
        next(err);
    }
}

  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const drug = await this.drugService.add({ ...req.body });
      res.status(201).json(drug);
    } catch (err) {
      next(err);
    }
  }



  getOne = async (req:Request, res:Response, next:NextFunction) => {
    const id = req.body.id;
    /*const drug = await this.drugService.findOne({
      try {
        const drug = await this.drugService.add({ ...req.body });
        res.status(201).json(drug);
      } catch (err) {
        next(err);
      }
    // if (!drug) {
    //   throw new ApiError("Ressource not exists");
    // }
     res.status(201).json(drug);
     */
  }

  update = async (req:Request, res:Response, next:NextFunction, id:number) => {
    
    /*const drugFound = await this.drugService.findOne({
     
        const drug = await this.drugService.add({ ...req.body });
        res.status(201).json(drug);
      } catch (err) {
        next(err);
      }
    //   where: { id },
    // });
    // if (!drugFound) {
    //   throw new ApiError("Ressource not exists");
    // }
    // await drugFound.update(data);
    res.status(201).json(drug);
    }
*/
  };

  delete = async (req:Request, res:Response, next:NextFunction, id:number) => {
   /* const drugFound = await this.drugService.findOne({
      try {
        const drug = await this.drugService.add({ ...req.body });
        res.status(201).json(drug);
      } catch (err) {
        next(err);
      }
    //   where: { id },
    // });
    // if (!drugFound) {
    //   throw new ApiError("Ressource not exists");
    // }
    // await drugFound.delete();
    res.status(201).json(drugFound);
  };
  */
}
  }

export default DrugController;
//recupère et envoie les requêtes