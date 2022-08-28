const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blogger extends Model {}

Blogger.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNUlls: false,
      defaultValue: 0,
    },
    email: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: "",
    },
    first_name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: "",
    },
    last_name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: "",
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: "",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    url: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: "",
    },
    image: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "",
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
