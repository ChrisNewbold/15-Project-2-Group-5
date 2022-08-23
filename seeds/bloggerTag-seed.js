const { BloggerTag } = require("../models");

const bloggerTagData = [
  {
    blogger_id: 1,
    tag_id: 1,
  },
  {
    blogger_id: 1,
    tag_id: 2,
  },
  {
    blogger_id: 1,
    tag_id: 3,
  },
  {
    blogger_id: 2,
    tag_id: 5,
  },
  {
    blogger_id: 2,
    tag_id: 7,
  },
  {
    blogger_id: 2,
    tag_id: 1,
  },
  {
    blogger_id: 3,
    tag_id: 2,
  },
  {
    blogger_id: 3,
    tag_id: 4,
  },
  {
    blogger_id: 4,
    tag_id: 5,
  },
  {
    blogger_id: 4,
    tag_id: 6,
  },
  {
    blogger_id: 4,
    tag_id: 1,
  },
];

const seedBloggerTags = () => BloggerTag.bulkCreate(bloggerTagData);

module.exports = seedBloggerTags;
