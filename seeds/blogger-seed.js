const { Blogger } = require("../models");

const bloggerData = [
  {
    name: "Kelly",
    email: "kelly@gmail.com",
    credits: 100,
  },
  {
    name: "Melissa",
    email: "melissa@gmail.com",
    credits: 100,
  },
  {
    name: "Dayle",
    email: "dayle@gmail.com",
    credits: 100,
  },
  {
    name: "Chanel",
    email: "chanel@gmail.com",
    credits: 100,
  },
];

const seedBlogger = () => Blogger.bulkCreate(bloggerData);

module.exports = seedBlogger;
