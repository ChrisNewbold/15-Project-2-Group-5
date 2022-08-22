const { Reader } = require("../models");

const readerData = [
  {
    email: "barry.hall@bazza.com",
    password: "Password123",
    credits: 500,
    terms: true,
    privacy: true,
  },
  {
    email: "shirls@gmail.com",
    password: "123456",
    credits: 500,
    terms: true,
    privacy: true,
  },
];

const seedReader = () => Reader.bulkCreate(readerData);

module.exports = seedReader;
