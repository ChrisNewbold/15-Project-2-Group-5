const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blogger extends Model {}

Blogger.init(
  {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    credit: {
      type: DataTypes.INTEGER(10),
      allowNUlls: false,
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blogger",
  }
);

module.exports = Blogger;
