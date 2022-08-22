// import models
const Article = require("./Article");
const Blogger = require("./Blogger");
const Reader = require("./Reader");
const ReaderArticle = require("./ReaderArticle");
const Tag = require("./Tags");
const BloggerTag = require("./BloggerTag");


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
  ReaderArticle,
  Tag,
  BloggerTag,
};
