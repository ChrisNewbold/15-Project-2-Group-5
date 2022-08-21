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
    credits: {
      type: DataTypes.INTEGER(10),
      allowNUlls: false,
    },
    email: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.CHAR(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.CHAR(100),
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
