import { NextFunction, Request, Response } from "express";
import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import { IConsultationService } from "../../helpers/Interfaces/consultation.interfaces";

@Controller("consultations")
class ConsultationController {
  private consultationService;
  constructor(consultationService: IConsultationService) {
    this.consultationService = consultationService;
  }
  @Post()
  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultation = await this.consultationService.register({
        ...req.body,
      });
      res.status(201).json(consultation);
    } catch (err) {
      next(err);
    }
  };
  @Get()
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultations = await this.consultationService.getAll();

      res.status(201).json(consultations);
    } catch (error) {
      next(error);
    }
  };
  @Get(":id")
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultation = await this.consultationService.getOne({
        ...req.body,
      });

      res.status(201).json(consultation);
    } catch (err) {
      next(err);
    }
  };

  @Delete(":id")
  delete = async (req: Request, res: Response, next: NextFunction) => {
    const consultationDeleted = await this.consultationService.delete({
      ...req.body,
    });

    res.status(201).json(consultationDeleted);
  };

  @Put(":id")
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultation = await this.consultationService.update({
        ...req.body,
      });

      res.status(201).json(consultation);
    } catch (err) {
      next(err);
    }
  };

  findByDoctor = async (
    id: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //   const consultation = await this.consultationService.getAll();
    } catch (error: unknown) {
      console.log(error);
    }
  };
}
export default ConsultationController;
