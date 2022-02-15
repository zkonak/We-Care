import pkg from "sequelize";
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";

class Drug extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      { sequelize, modelName: "Drug" }
    );
  }

  static associate(models) {
    models.Drug.hasMany(models.DrugPrescription);
  }
}

Drug.init(db.sequelize);

export default Drug;
