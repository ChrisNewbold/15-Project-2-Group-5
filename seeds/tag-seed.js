const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Science",
  },
  {
    tag_name: "Healthcare",
  },
  {
    tag_name: "Entertainment",
  },
  {
    tag_name: "Sport",
  },
  {
    tag_name: "Current Affairs",
  },
  {
    tag_name: "Kids",
  },
  {
    tag_name: "Parenting",
  },
  {
    tag_name: "Food",
  },
  {
    tag_name: "Work",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
