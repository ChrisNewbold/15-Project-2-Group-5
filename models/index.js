// import models
const Article = require("./Article");
const Blogger = require("./Blogger");
const Reader = require("./Reader");
const ReaderArticle = require("./ReaderArticle");
const Tag = require("./Tag");
const BloggerTag = require("./BloggerTag");

// Reader can have many Articles
Article.belongsTo(Blogger, {
  foreignKey: "blogger_id",
  onDelete: "CASCADE",
});

module.exports = {
  Article,
  Blogger,
  Reader,
  ReaderArticle,
  Tag,
  BloggerTag,
};
