const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306 || process.env.PORT,
        user: 'root',
        password: 'Gl0rf1&d3l',
        database: 'burgers_db'
    });
};

connection.connect(err => {
    if (err) throw err;
    console.log('Connected as ID', connection.threadId);
});

module.exports = connection;