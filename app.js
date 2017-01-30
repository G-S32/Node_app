var express = require('express');
var app = express();
var fs = require("fs");
var userData;
app.set('view engine', 'pug')
app.get('/dataUsers', function (req, res) {
   fs.readFile( "views/data.json", 'utf8', function (err, data1) {
       userData = JSON.parse(data1);
       console.log( userData);
       
              res.render('index', { title: 'test', message: userData});
              
   });
})

   var server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log((new Date()) + 'App is listening at http://' + host + ':' + port)
})