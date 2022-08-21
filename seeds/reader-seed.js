const { Reader } = require("../models");

const readerData = [
  {
    name: "Barry Hall",
    credits: 500,
    email: "barry.hall@bazza.com",
  },
  {
    name: "Shirley Smith",
    credits: 500,
    email: "shirls@gmail.com",
  },
];

const seedReader = () => Reader.bulkCreate(readerData);

module.exports = seedReader;
