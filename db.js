require('dotenv').config();
const mysql = require('mysql2/promise');
//crear pool de conexiones a la base de datos.
const pool = mysql.createPool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
//port: process.env.DB_PORT, //se toma desde el archivo .env
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});
module.exports = pool;