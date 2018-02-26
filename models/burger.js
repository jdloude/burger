var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);

        })
    },
    create: function(newBurger, cb) {
        orm.insertOne('burgers', newBurger, function(res) {
            cb(res);

        })
    },
    update: function(col, row, cb) {
        orm.updateOne('burgers', col, row, function(res) {
            cb(res);

        })
    }
}
module.exports = burger;