const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost/3308',
  user: 'root',
  password: '',
  database: 'SALAS_DB',
});

module.exports = pool;


