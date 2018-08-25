const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306 || process.env.PORT,
    user: 'root',
    password: 'Gl0rf1&d3l',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected as ID', connection.threadId);
});

module.exports = connection;