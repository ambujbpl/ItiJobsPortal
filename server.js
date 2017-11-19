var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');
// mysql connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'itijobs'
});
// mysql connection
connection.connect(function(err,data){
  if(err){console.log(err);}
});

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('view engine', 'html');
// app.use(express.static(path.join(__dirname, '../web')));
app.use(express.static(path.join(__dirname, './web')));
// console.log(__dirname,'./web/login.html');
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/web/" + "login.html");
});
app.listen(8000, function(req, res) {
  console.log("server is listening port number 8000");
});

app.post('/login', function(req, res, next) {
  // app.use(express.bodyParser.json());
  var x = req.body.username;
  var y = req.body.password;
  // var z= {"name":"ambuj","pass":"12345"};
  console.log(x, ".................", y);
  connection.query('SELECT * FROM login WHERE uname = "'+ x+'" and pass = "'+ y+'"', function (err, result,fields) {
    if (err) throw err;
    else{
      if(result != '')
      {
        console.log(result[0]);
        return res.json({"resCode":"OK","msg":"Validation successful!","role":result[0].role,"name":result[0].name});
      }
      else
      {
        console.log("empty");
        return res.json({"resCode":"Error","msg":"User Not Valid!"});
      }
    }
  });
  // next();
});
app.post("/logout", function(req, res){
  // req.logout();
  return res.json({"resCode":"OK","msg":"logging out"});
});
