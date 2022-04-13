import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import {
  Controller,
  Middleware,
  Get,
  Post,
  Put,
  Delete,
} from "@overnightjs/core";
import { Response, Request, NextFunction } from "express";
import { IPatientService } from "./service";
import { auth } from "../../middlewares";
@Controller("patients")
class PatientController {
  public patientService: any;
  public jwtService: any;
  public secret: any;

  constructor(patientService: IPatientService, jwtService: JwtService) {
    this.patientService = patientService;
    this.jwtService = jwtService;
  }
  compareHash = async (password: any, hash: any) =>
    await bcrypt.compareSync(password, hash);

  @Post("login")
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patient = await this.patientService.login({ ...req.body });
      const token = await this.jwtService.generateToken({ id: patient.id });
      res.cookie("auth-cookie", token, {
        expires: new Date(Date.now() + 30 * 86400 * 1000),
      });

      res.status(200).json(patient);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  @Post()
  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
     
      const patient = await this.patientService.register({ ...req.body });
      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  };

  async findByEmail(patientEntity: any) {
    // return await this.#models.Patient.findOne({
    //   where: { email: patientEntity.email },
    // });
    return await this.patientService.findByEmail(patientEntity);
    //res.status(201).json(patient);
  }
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patient = await this.patientService.getOne({ ...req.body });

      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patient = await this.patientService.update({ ...req.body });

      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const patient = await this.patientService.delete({ ...req.body });

      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  };
}

export default PatientController;
