require("dotenv").config();

module.exports = {
  database: process.env.DB_NAME || "assignment_app",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
};
