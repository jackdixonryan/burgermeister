const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Gl0rf1&d3l',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected as ID', connection.threatId);
});

module.exports = connection;