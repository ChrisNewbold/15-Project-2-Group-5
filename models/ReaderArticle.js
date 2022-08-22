const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ReaderArticle extends Model {}

ReaderArticle.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "reader",
        key: "id",
        unique: false,
      },
    },
    article_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "article",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reader_article",
  }
);

module.exports = ReaderArticle;
