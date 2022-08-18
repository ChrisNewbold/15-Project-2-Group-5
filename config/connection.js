const Sequelize = require("sequelize");
const {
  _DB_USER,
  _DB_PASSWORD,
  _DB_NAME,
  _DB_PORT,
  _DB_HOST,
} = require("./config");
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(_DB_NAME, _DB_USER, _DB_PASSWORD, {
  host: _DB_HOST,
  dialect: "mysql",
  port: _DB_PORT,
  dialectOptions: {
    decimalNumbers: true,
  },
  logging: false,
});
}

module.exports = sequelize;
