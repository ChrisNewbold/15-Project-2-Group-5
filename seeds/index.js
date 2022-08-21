/* eslint-disable no-console */
require("dotenv").config();

const seedArticles = require("./article-seed");
const seedBlogger = require("./blogger-seed");
const seedReader = require("./reader-seed");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedArticles();
  console.log("\n----- ARTICLES SEEDED -----\n");
  await seedBlogger();
  console.log("\n----- BLOGGER SEEDED -----\n");
  await seedReader();
  console.log("\n----- READER SEEDED -----\n");

  process.exit(0);
};

seedAll();
