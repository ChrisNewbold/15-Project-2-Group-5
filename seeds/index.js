/* eslint-disable no-console */
require("dotenv").config();

const mysql = require("mysql2");
const seedArticles = require("./article-seed");
const seedBlogger = require("./blogger-seed");
const seedReader = require("./reader-seed");
const seedTags = require("./tag-seed");
const seedBloggerTags = require("./bloggerTag-seed");
const sequelize = require("../config/connection");
const {
  _DB_USER,
  _DB_PASSWORD,
  _DB_PORT,
  _DB_HOST,
  _DB_NAME,
} = require("../config/config");

const con1 = mysql.createConnection({
  host: _DB_HOST,
  user: _DB_USER,
  password: _DB_PASSWORD,
  port: _DB_PORT,
});

const con2 = mysql.createConnection({
  host: _DB_HOST,
  user: _DB_USER,
  password: _DB_PASSWORD,
  port: _DB_PORT,
});

const databaseName = _DB_NAME;

con1.connect((err) => {
  if (err) throw err;
  con1.query(`DROP DATABASE IF EXISTS ${databaseName}`, (err2) => {
    if (err2) throw err2;
  });
  con1.end();
  console.log("DROPPED DATABASE");
});

con2.connect((err) => {
  if (err) throw err;
  con2.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (err2) => {
    if (err2) throw err2;
  });
  con2.end();
  console.log("CREATED DATABASE");
});

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
