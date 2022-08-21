const { Blogger } = require("../models");

const bloggerData = [
  {
    credits: 100,
    email: "kelly@gmail.com",
    first_name: "Kelly",
    last_name: "Smelly",
    password: "safgsdtrherygwdthwetjnwrn",
    description: "This is a really good blog",
    url: "www.someblog.com",
    image: "path/to/file.png",
  },
  {
    credits: 100,
    email: "billy@gmail.com",
    first_name: "Billy",
    last_name: "Corgan",
    password: "safgsdtrherygwdthwetjnwrn",
    description: "This is a really bad blog",
    url: "www.someblog2.com",
    image: "path/to/file.png",
  },
  {
    credits: 100,
    email: "bruce@gmail.com",
    first_name: "Bruce",
    last_name: "Dickenson",
    password: "safgsdtrherygwdthwetjnwrn",
    description: "This is an ok blog",
    url: "www.someblog3.com",
    image: "path/to/file.png",
  },
  {
    credits: 100,
    email: "Shelley@gmail.com",
    first_name: "Shelly",
    last_name: "Somename",
    password: "safgsdtrherygwdthwetjnwrn",
    description: "This is a blog",
    url: "www.someblog4.com",
    image: "path/to/file.png",
  },
];

const seedBlogger = () => Blogger.bulkCreate(bloggerData);

module.exports = seedBlogger;
