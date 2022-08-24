const { Reader } = require("../models");

const readerData = [
  {
    email: "barry.hall@bazza.com",
    first_name: "Barry",
    last_name: "Hall",
    password: "$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW",
    credits: 225,
    terms: true,
    privacy: true,
  },
  {
    email: "shirls@gmail.com",
    first_name: "Shirley",
    last_name: "Somename",
    password: "$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW",
    credits: 430,
    terms: true,
    privacy: true,
  },
];

const seedReader = () => Reader.bulkCreate(readerData);

module.exports = seedReader;
