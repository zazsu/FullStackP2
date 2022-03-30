var express = require('express');
var fs = require('fs');
const { send } = require('process');

var app = express();

var bodyParser = require('body-parser');
const { dirname } = require('path');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("pages/index.ejs");
});

app.get("/page1" , function(req, res){
    var data1 = require(__dirname + '/public/page1data.json');

    res.render("pages/page1", {data: data1});
})

app.get("/page2" , function(req, res){
    var data2 = require(__dirname + '/public/page2data.json');

    res.render("pages/page2", {data: data2});
})

app.get("/page3" , function(req, res){
    var data3 = require(__dirname + '/public/page3data.json');

    res.render("pages/page3", {data: data3});
})

app.get('*', function (req, res) {
    res.status(404).send("Page not found...");
});


app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });