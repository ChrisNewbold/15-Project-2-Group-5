// import models
const Article = require("./Article");
const Blogger = require("./Blogger");
const Reader = require("./Reader");
const Tag = require("./Tags");

// Reader can have many Articles
Reader.hasMany(Article, {
  foreignKey: "article_id",
});

// blogger has many article

// articles has one blogger

module.exports = {
  Article,
  Blogger,
  Reader,
  Tag,
};
