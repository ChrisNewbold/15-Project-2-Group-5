/* eslint-disable no-console */
require("dotenv").config();

const seedArticles = require("./article-seed");
const seedBlogger = require("./blogger-seed");
const seedReader = require("./reader-seed");
const seedTags = require("./tag-seed");
const seedBloggerTags = require("./bloggerTag-seed");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedBlogger();
  console.log("\n----- BLOGGER SEEDED -----\n");
  await seedArticles();
  console.log("\n----- ARTICLES SEEDED -----\n");
  await seedReader();
  console.log("\n----- READER SEEDED -----\n");
  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n");
  await seedBloggerTags();
  console.log("\n----- BLOGGER-TAGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
