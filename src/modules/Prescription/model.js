import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";

class Prescription extends Model {
  static init(sequelize) {
    return super.init(
      {
       
      },
      { sequelize, modelName: "Prescription" }
    );
  }

  static associate(models) {
    models.Prescription.belongsTo(models.Consultation);
    models.Prescription.hasMany(models.DrugPrescription);

  }
}

Prescription.init(db.sequelize);

export default Prescription;
