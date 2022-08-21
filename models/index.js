// import models
const Article = require("./Article");
const Blogger = require("./Blogger");
const Reader = require("./Reader");

// Reader can have many Articles
Reader.hasMany(Article, {
  foreignKey: "article_id",
});

module.exports = {
  Article,
  Blogger,
  Reader,
};
