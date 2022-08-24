const { Reader } = require("../models");

const readerData = [
  {
    email: "barry.hall@bazza.com",
    first_name: "Barry",
    last_name: "Hall",
    password: "Password123",
    credits: 225,
    terms: true,
    privacy: true,
  },
  {
    email: "shirls@gmail.com",
    first_name: "Shirley",
    last_name: "Somename",
    password: "123456",
    credits: 430,
    terms: true,
    privacy: true,
  },
];

const seedReader = () => Reader.bulkCreate(readerData);

module.exports = seedReader;
