const {sequelize, Sequelize} = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(process.env.MYSQL_URI);

try {
    connection.authenticate();
    console.log("Database connection successful.");
} catch (error) {
    console.log(error)
}


module.exports = connection;