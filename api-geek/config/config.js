require("dotenv").config();

module.exports = {
    dbname: process.env.DB_NAME,
    dbhost: process.env.DB_HOST,
    dbuser: process.env.DB_USER,
    dbpassword: process.env.DB_PASSWORD,
    port: process.env.PORT || 3000
}