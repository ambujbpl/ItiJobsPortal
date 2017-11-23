var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');
// mysql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'itijobs'
});
// mysql connection
connection.connect({
  multipleStatements: true
}, function(err, data) {
  if (err) {
    console.log(err);
  }
});

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, './web')));
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/web/" + "login.html");
});
app.listen(8000, function(req, res) {
  console.log("server is listening port number 8000");
});

app.post('/login', function(req, res, next) {
  var x = req.body.username;
  var y = req.body.password;
  console.log(x, ".................", y);
  connection.query('SELECT * FROM login WHERE uname = "' + x + '" and pass = "' + y + '"', function(err, result) {
    if (err) throw err;
    else {
      if (result != '') {
        console.log(result[0]);
        return res.json({
          "resCode": "OK",
          "msg": "Validation successful!",
          "role": result[0].role,
          "name": result[0].name,
          "number": result[0].uname
        });
      } else {
        return res.json({
          "resCode": "Error",
          "msg": "User Not Valid!"
        });
      }
    }
  });
});

app.post("/logout", function(req, res) {
  return res.json({
    "resCode": "OK",
    "msg": "logging out"
  });
});

app.post("/newAdmin", function(req, res) {
  console.log(req.body);
  connection.query('SELECT * FROM login WHERE uname = "' + req.body.Mobile + '"', function(err, result) {
    if (err) throw err;
    else {
      if (result == '') {
        connection.query('SELECT * FROM admin WHERE Name = "' + req.body.Name + '" AND ( City = "' + req.body.City + '" OR Pincode = "' + req.body.Pincode + '")', function(err, result1) {
          if (err) throw err;
          else {
            if (result1 != '') {
              console.log(result1);
              return res.json({
                "resCode": "Error",
                "msg": "User Already Register"
              });
            } else {
              connection.query('INSERT INTO admin SET ?', req.body, function(err, result2) {
                if (err) throw err;
                else {
                  connection.query('INSERT INTO login VALUES( "Admin","' + req.body.Mobile + '", "12345", "' + req.body.Name + '")', function(err, result3) {
                    console.log("result3");
                    return res.json({
                      "resCode": "OK",
                      "msg": "New Admin Register"
                    });
                  });
                }
              });
            }
          }
        });

      } else {
        return res.json({
          "resCode": "Error",
          "msg": "Mobile Number Already Register"
        });
      }
    }
  });
});

app.post("/newStudent", function(req, res) {
  console.log(req.body);
  connection.query('SELECT * FROM login WHERE uname = "' + req.body.Mobile + '"', function(err, result) {
    if (err) throw err;
    else {
      if (result == '') {
        connection.query('SELECT * FROM student WHERE Name = "' + req.body.Name + '" AND ( City = "' + req.body.City + '" OR Pincode = "' + req.body.Pincode + '")', function(err, result1) {
          if (err) throw err;
          else {
            if (result1 != '') {
              console.log(result1);
              return res.json({
                "resCode": "Error",
                "msg": "User Already Register"
              });
            } else {
              connection.query('INSERT INTO student SET ?', req.body, function(err, result2) {
                if (err) throw err;
                else {
                  connection.query('INSERT INTO login VALUES( "Student","' + req.body.Mobile + '", "12345", "' + req.body.Name + '")', function(err, result3) {
                    return res.json({
                      "resCode": "OK",
                      "msg": "New Student Register"
                    });
                  });
                }
              });
            }
          }
        });

      } else {
        return res.json({
          "resCode": "Error",
          "msg": "Mobile Number Already Register"
        });
      }
    }
  });
});

// connection.end(function(err, data){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("DB Connection End successfully!");
//   }
// });
