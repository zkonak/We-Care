import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";

class Service extends Model {
  static init(sequelize) {
    return super.init(
      {
        
        name: DataTypes.STRING,
        
      },
      { sequelize, modelName: "Service" }
    );
  }

  static associate(models) {
   models.Service.hasMany(models.User);
  }
}

Service.init(db.sequelize);

export default Service;
