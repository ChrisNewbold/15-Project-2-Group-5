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
      defaultValue: "",
    },
    first_name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: "",
    },
    last_name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: "",
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0,
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
