const { Article } = require("../models");

const articleData = [
  {
    url: "http://nateloudon.com/fake-blog",
    credits: 50,
  },
  {
    url: "http://localhost:3002/splashTest.html",
    credits: 30,
  },
];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
