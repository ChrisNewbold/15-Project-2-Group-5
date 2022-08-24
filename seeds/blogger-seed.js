const { Blogger } = require("../models");

const bloggerData = [
  {
    credits: 100,
    email: "kelly@gmail.com",
    first_name: "Kelly",
    last_name: "Smelly",
    password: "$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW",
    description: "This is a really good blog",
    url: "www.someblog.com",
    image: "path/to/file.png",
  },
  {
    credits: 100,
    email: "billy@gmail.com",
    first_name: "Billy",
    last_name: "Corgan",
    password: "$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW",
    description: "This is a really bad blog",
    url: "www.someblog2.com",
    image: "path/to/file.png",
  },
  {
    credits: 100,
    email: "bruce@gmail.com",
    first_name: "Bruce",
    last_name: "Dickenson",
    password: "$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW",
    description: "This is an ok blog",
    url: "www.someblog3.com",
    image: "path/to/file.png",
  },
  {
    credits: 100,
    email: "Shelley@gmail.com",
    first_name: "Shelly",
    last_name: "Somename",
    password: "$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW",
    description: "This is a blog",
    url: "www.someblog4.com",
    image: "path/to/file.png",
  },
];

const seedBlogger = () => Blogger.bulkCreate(bloggerData);

module.exports = seedBlogger;
