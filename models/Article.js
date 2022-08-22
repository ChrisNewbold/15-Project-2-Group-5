const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Article extends Model {}

Article.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 40,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "article",
  }
);

module.exports = Article;
