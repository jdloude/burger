var connection = require('./connection.js');

function QuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

// function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === 'string') {
                value = `'${value}'`;
            }

            arr.push(key + '=' + value);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, callBack) {
        var query = 'SELECT * FROM ??';
        connection.query(query, [tableInput], function(err, result) {
            if (err) throw err;
            callBack(result);
        });
    },
    insertOne: function(tableInput, newBurger, callBack) {
        var query = 'INSERT INTO ' + tableInput;
        query += ' SET ';
        query += objToSql(newBurger);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callBack(result);
        })
    },
    updateOne: function(tableInput, col, row, callBack) {
        var query = 'UPDATE ' + tableInput

        query += " SET ";
        query += objToSql(col);

        query += " WHERE ";
        query += objToSql(row);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callBack(result);
        });
    }
};

module.exports = orm;