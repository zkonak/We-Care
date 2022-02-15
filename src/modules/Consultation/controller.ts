import ApiError from "../../helpers/ApiError.js";

class ConsultationController {
	public consultationService: any;
  //   #models;
  constructor(consultationService) {
    // this.#models = models;
    this.consultationService = consultationService;
  }

  add = async (req, res, next) => {
    try {
      const consultation = await this.consultationService.create({
 ...req.body});
      res.status(201).json(consultation);
    } catch (err) {
      next(err);
    }
  };
 
  getAll = async (req, res, next) => {
    try {
      const consultations = await this.consultationService.findAll({
        ...req.body ,
      });
      res.status(201).json(consultations);
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const consultation = await this.consultationService.findOne({
        ...req.body ,
      });
      res.status(201).json(consultation);
    } catch (error) {
      next(error);
    }
  };

  
  update = async (req, res, next) => {
    //  const consultationFound = await this.consultationService.findOne({
    //   where: { id },
    try {
      const consultationFound = await this.consultationService.update({
        ...req.body,
      });
     res.status(201).json(consultationFound);

    } catch (error) {
      next(error);
    }    
  };
  


  delete = async (req, res, next) => {
   
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
