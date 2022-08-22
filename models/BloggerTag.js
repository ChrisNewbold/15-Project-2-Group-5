const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class BloggerTag extends Model {}

BloggerTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogger_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogger",
        key: "id",
        unique: false,
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
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
    modelName: "blogger_tag",
  }
);

module.exports = BloggerTag;
