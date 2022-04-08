import { NextFunction, Request, Response } from "express";
import { Controller, Get, Post } from "@overnightjs/core";
import { IConsultationService } from "../../helpers/Interfaces/consultation.interfaces";

@Controller("consultations")
class ConsultationController {
  consultationService: any;

  constructor(consultationService: IConsultationService) {
    this.consultationService = this.consultationService;
  }
  @Post()
  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultation = await this.consultationService.add({
        ...req.body,
      });
      res.status(201).json(consultation);
    } catch (err) {
      next(err);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultations = await this.consultationService.getAll();
      res.status(201).json(consultations);
    } catch (error) {
      next(error);
    }
  };
  @Get(":id")
  getOne = async (id: any, req: Request, res: Response, next: NextFunction) => {
    try {
      const consultation = await this.consultationService.getOne(id);
      res.status(201).json(consultation);
    } catch (error) {
      next(error);
    }
  };

  update = async (id: any, req: Request, res: Response, next: NextFunction) => {
    try {
      const consultationFound = await this.consultationService.update({
        id,
      });
      res.status(201).json(consultationFound);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultationDelete = await this.consultationService.delete({
        ...req.body,
      });
      res.status(201).json(consultationDelete);
    } catch (error) {
      next(error);
    }
  };
}

export default ConsultationController;
