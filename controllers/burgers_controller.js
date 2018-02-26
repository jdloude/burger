var express = require('express');
var routes = express.Router();
var burger = require('../models/burger.js');

//select all
routes.get('/', function(req, res) {
    burger.all(function(data) {
        var allBurgers = {
            burgers: data
        };
        res.render('index', allBurgers);
    });

});

//insert
routes.post('/add_a_burger', function(req, res) {
    var newBurger = req.body.val.toString();
    burger.create({ 'burger_name': newBurger }, function(data) {
        res.json({ id: data.insertId });
    });
});

//update
routes.post('/devour_a_burger', function(req, res) {
    var col = { 'devoured': 1 };
    var id = parseInt(req.body.row);
    var row = { 'id': id };
    burger.update(col, row, function(data) {
        console.log("You ate a Burger!");
    });
});

module.exports = routes;