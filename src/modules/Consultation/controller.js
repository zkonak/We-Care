import ApiError from "../../helpers/ApiError.js";

class ConsultationController {
  //   #models;
  constructor(consultationService) {
    // this.#models = models;
    this.consultationService = consultationService;
  }

  add = async (req, res, next) => {
    try {
      const consultation = await this.consultationService.create({
        ...req.body,
      });
      res.status(201).json(consultation);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const consultation = await this.consultationService.findOne({
        consultation,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next, id, data) => {
    //  const consultationFound = await this.consultationService.findOne({
    //   where: { id },
    try {
      const consultationFound = await this.consultationService.update({
        ...req.body,
      });
    } catch (error) {
      next(error);
    }

    //});
    // if (!consultationFound) {
    //   throw new ApiError("Ressource not exists");
    // }

    //await consultationFound.update(data);

    // const consultation = await this.consultationService.findOne({
    //   where: {
    //     id,
    //   },
    //   attributes: { exclude: ["dateCreated"] },
    // });

    // res.status(201).json(consultation);
  };

  delete = async (req, res, next, id, data) => {
    //     const consultationFound = await this.consultationService.findOne({
    //       where: { id },
    //     });
    //     if (!consultationFound) {
    //       throw new ApiError("Ressource not exists");
    //     }
    //     await consultationFound.delete();
    //     res.status(201).json(consultationFound);
    try {
      const consultationDelete = await this.consultationService.delete({
        ...req.body,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default ConsultationController;
