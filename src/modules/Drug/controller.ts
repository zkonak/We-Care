import ApiError from "../../helpers/ApiError.js";

class DrugController {

  constructor(drugService) {
    this.drugService = drugService;
    
  }

  getAll = async ({res, next}) => {
    try {
        let drugs = await this.drugService.getAll();
        res.status(200).json(drugs);
    } catch (err) {
        next(err);
    }
}

  add = async (req, res, next) => {
    try {
      const drug = await this.drugService.add({ ...req.body });
      res.status(201).json(drug);
    } catch (err) {
      next(err);
    }
  }



  getOne = async (req, res, next) => {
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

  update = async (req, res, next, id, data) => {
    
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

  delete = async (req, res, next, id, data) => {
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