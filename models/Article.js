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
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    preview: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg",
    },
    credits: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 40,
    },
    blogger_id: {
      type: DataTypes.INTEGER(10),
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
