/* eslint-disable no-console */
require("dotenv").config();

const seedArticles = require("./article-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedArticles();
  console.log("\n----- ARTICLES SEEDED -----\n");

  process.exit(0);
};

seedAll();