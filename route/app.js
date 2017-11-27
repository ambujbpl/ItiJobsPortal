var express = require('express')
var router = express.Router()
var mysql = require('mysql');
// mysql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'itijobs',
  multipleStatements: true
});
// mysql connection
connection.connect(
  function(err, data) {
    if (err) {
      console.log(err);
    }
  });
// require('mysql-queries').init(options);
// define the home page route
// router.post('/ambuj', function (req, res) {
// console.log(req.body);
// var sqlclient = require('mysql-queries'),
//   sqls = ['INSERT INTO admin (Name,Email,Mobile,Address,City,Pincode) VALUES(?)',
//   'INSERT INTO login (role,uname,pass,name)VALUES(?)'];
//
// sqlclient.queries(sqls,
//   [[req.body],["Admin",req.body.Mobile,"12345",req.body.Name]],
//   function(err, results){
// 	if(!!err) {
// 	  console.log(err);
// 	} else {
// 	//If not error, the "results" is the results of the SQLs as array.
// 	  console.log(results);
// 	}
//   });
// });
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds Ambuj')
})
//our main Restfull API
router.get('/total', function(req, res, next) {
  connection.query('SELECT COUNT(Name) FROM iti; SELECT COUNT(Name) FROM student; SELECT COUNT(Name) FROM company', function(err, result, feild) {
    if (err) throw err;
    else {
      if (result != '') {
        console.log(result);
        return res.json({
          "resCode": "OK",
          "Total_ITI": result[0][0]['COUNT(Name)'],
          "Total_Student": result[1][0]['COUNT(Name)'],
          "Total_Company": result[2][0]['COUNT(Name)']
        });
      } else {
        return res.json({
          "resCode": "Error",
          "msg": "Error Register"
        });
      }
    }
  });
});

router.post('/login', function(req, res, next) {
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

router.post("/logout", function(req, res) {
  return res.json({
    "resCode": "OK",
    "msg": "logging out"
  });
});

router.post("/newAdmin", function(req, res) {
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

router.post("/newStudent", function(req, res) {
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

router.post("/newCompany", function(req, res) {
  console.log(req.body);
  connection.query('SELECT * FROM login WHERE uname = "' + req.body.HR_Mobile + '"', function(err, result) {
    if (err) throw err;
    else {
      if (result == '') {
        connection.query('SELECT * FROM company WHERE Name = "' + req.body.Name + '" AND ( City = "' + req.body.City + '" OR Pincode = "' + req.body.Pincode + '")', function(err, result1) {
          if (err) throw err;
          else {
            if (result1 != '') {
              console.log(result1);
              return res.json({
                "resCode": "Error",
                "msg": "User Already Register"
              });
            } else {
              connection.query('INSERT INTO company SET ?', req.body, function(err, result2) {
                if (err) throw err;
                else {
                  connection.query('INSERT INTO login VALUES( "Company","' + req.body.HR_Mobile + '", "12345", "' + req.body.Name + '")', function(err, result3) {
                    console.log("result3");
                    return res.json({
                      "resCode": "OK",
                      "msg": "New Company Register"
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

router.post("/newIti", function(req, res) {
  console.log(req.body);
  connection.query('SELECT * FROM login WHERE uname = "' + req.body.TPO_Mobile + '"', function(err, result) {
    if (err) throw err;
    else {
      if (result == '') {
        connection.query('SELECT * FROM iti WHERE Name = "' + req.body.Name + '" AND ( City = "' + req.body.City + '" OR Pincode = "' + req.body.Pincode + '")', function(err, result1) {
          if (err) throw err;
          else {
            if (result1 != '') {
              console.log(result1);
              return res.json({
                "resCode": "Error",
                "msg": "User Already Register"
              });
            } else {
              connection.query('INSERT INTO iti SET ?', req.body, function(err, result2) {
                if (err) throw err;
                else {
                  connection.query('INSERT INTO login VALUES( "College","' + req.body.TPO_Mobile + '", "12345", "' + req.body.Name + '")', function(err, result3) {
                    if (err) throw err;
                    else {
                      connection.query('INSERT INTO collegeName SET ?', {
                        name: req.body.Name
                      }, function(err, result4) {
                        console.log(result4);
                        return res.json({
                          "resCode": "OK",
                          "msg": "New ITI College Register"
                        });
                      });
                    }
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
module.exports = router
