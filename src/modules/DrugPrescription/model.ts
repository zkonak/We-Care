import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";

class DrugPrescription extends Model {
  static init(sequelize) {
    return super.init(
      {
        
        frequent: DataTypes.STRING,
      },
      { sequelize, modelName: "DrugPrescription" }
    );
  }

  static associate(models) {
   // models.DrugPrescription.hasMany(models.Prescription);
  }
}

DrugPrescription.init(db.sequelize);

export default DrugPrescription;
