const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Reader extends Model {}

Reader.init(
  {
    // define columns
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
    first_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.CHAR(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    terms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    privacy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
