let connection = require('./connection');
//NEED: selectAll, insertOne, and updateOne methods

const orm = {
    select: (table, searchCol, colVal, cb) => {
        let query = 'SELECT * FROM ?? WHERE ?? = ?';
        connection.query(query, [table, searchCol, colVal], (err, data) => { 
            if (err) throw err;
            cb(data);
        });
    },
    addBurger: (burgerName) => {
        let query = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)';
        connection.query(query, [burgerName], (err, data) => {
            if (err) throw err;
            console.log('Sucessfully Posted.');
        });
    },
    devour: (burgerName, cb) => {
        let query = 'UPDATE burgers SET devoured = 1 WHERE burger_name = ?';
        connection.query(query, [burgerName], (err, data) => {
            if (err) throw err;
            console.log(burgerName, 'has been updated to devoured.');
            cb(data);
        });
    },
    getAll : (cb) => {
        let query = 'SELECT * FROM BURGERS';
        connection.query(query, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;
