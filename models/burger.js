
var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
            // console.log(res);
        })
    },   
    create: function(newBurger, cb) {
        orm.insertOne('burgers',newBurger, function(res){
            cb(res);
            // console.log(res);            
        })
    },   
    update: function(col,row,cb) {
        orm.updateOne('burgers',col,row, function(res){
            cb(res);
            // console.log(res);            
        })
    }
}
module.exports = burger;
