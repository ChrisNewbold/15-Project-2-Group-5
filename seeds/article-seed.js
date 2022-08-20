const { Article } = require("../models");

const articleData = [
  {
    url: "http://nateloudon.com/fake-blog",
    credits: 50,
  },
];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
