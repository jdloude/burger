//set up db connection
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'burgers_db'
    });

    // Make connection.
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ', err.stack);
            return;
        }
        console.log('mySQL is running on ID:', connection.threadId);
    });
}
module.exports = connection;