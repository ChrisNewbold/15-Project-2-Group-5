const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Reader extends Model {}

Reader.init(
  {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reader",
  }
);

module.exports = Reader;
