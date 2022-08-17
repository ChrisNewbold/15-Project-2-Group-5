/* eslint-disable no-console */
require("dotenv").config();
const mysql = require("mysql2");
const {
  _DB_USER,
  _DB_PASSWORD,
  _DB_PORT,
  _DB_HOST,
  _DB_NAME,
} = require("../config/config");

const con = mysql.createConnection({
  host: _DB_HOST,
  user: _DB_USER,
  password: _DB_PASSWORD,
  port: _DB_PORT,
});

const databaseName = _DB_NAME;

con.connect((err) => {
  if (err) throw err;
  con.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (err2) => {
    if (err2) throw err2;
  });
  con.end();
  console.log("CREATED DATABASE");
});
