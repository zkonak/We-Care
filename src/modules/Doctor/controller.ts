
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JwtService from "../../libs/jwt";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { Response, Request, NextFunction } from "express";
import { IDoctorService } from "./service";
import { auth } from "../../middlewares";
@Controller('doctors')
class DoctorController {
	public doctorService: any;
	public jwtService: any;
	public secret: any;
  
  constructor(doctorService:IDoctorService, jwtService:JwtService) {
    this.doctorService = doctorService;
    this.jwtService = jwtService;
  }
  compareHash = async (password:any, hash:any) =>
    await bcrypt.compareSync(password, hash);
  
    @Post('login')
  login = async (req:Request, res:Response, next:NextFunction) => {
    try {
     
      const doctor = await this.doctorService.login({ ...req.body });
      const token = await this.jwtService.generateToken({ id: doctor.id });
      res.cookie('auth-cookie', token, {expires: new Date(Date.now() + (30 * 86400 * 1000))});

      res.status(200).json(doctor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  @Post()
  add = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const doctorData = req.body;
      // doctorData.password = bcrypt.hashSync(req.body.password, salt);
      //const doctor = await this.#models.Doctor.create({ ...doctorData });
      const doctor = await this.doctorService.register({ ...req.body });
      res.status(201).json(doctor);
    } catch (err) {
      next(err);
    }
  };

  async findByEmail(doctorEntity:any) {
    // return await this.#models.Doctor.findOne({
    //   where: { email: doctorEntity.email },
    // });
    return await this.doctorService.findByEmail(doctorEntity);
    //res.status(201).json(doctor);
  }
  @Get()
  @Middleware(auth.isAuth)
  getOne = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const doctor = await this.doctorService.getOne({ ...req.body });

      res.status(201).json(doctor);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const doctor = await this.doctorService.update({ ...req.body });

      res.status(201).json(doctor);
    } catch (err) {
      next(err);
    }
  };
  @Delete()
  delete = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const doctor = await this.doctorService.delete({ ...req.body });

      res.status(201).json(doctor);
    } catch (err) {
      next(err);
    }
  };
}

export default DoctorController;
