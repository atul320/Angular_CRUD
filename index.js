const cors = require("cors")
const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//sql connection
const mysql = require('mysql')
const conn = mysql.createConnection({
   host: '172.16.15.165',
   user: 'admin',
   password: 'Kalkine@123',
   database: 'atul.bhardwaj'
})

//View User
app.get('/listUsers', (req, res) => {
   conn.connect(() => {
      conn.query('SELECT * FROM users', (err, rows, fields) => {
         res.json(rows);
      });
   });
});
//View User

//Show User Though Id
app.get('/listUsers/:id', (req, res, fields) => {
   conn.connect(() => {
      conn.query(`SELECT * FROM users WHERE id=${req.params.id};`, (err, rows, fields) => {
         res.json(rows)
      });
   });
});
//Show User Though Id

//Add User
app.post('/addUser', function (req, res) {
   let data = {
      "name": req.body.name,
      "password": req.body.password,
      "profession": req.body.profession
   };
   console.log(data)
   conn.query('INSERT INTO users SET ?', data, function (err, rows, fields) {
      if (err) throw error;
      res.json(rows);
   });
});

//Add user

//Update user
app.put('/updateUsers', function (req, res) {
   conn.connect(() => {
      conn.query('UPDATE `users` SET `name`=?,`password`=?,`profession`=? where `id`=?', [req.body.name, req.body.password, req.body.profession, req.body.uid], function (error, rows, fields) {
         if (error) {
            res.status(404)
         };
         res.json(rows);
      });
   });
});
//Update user

//Delete User 
app.delete('/deleteUser', function (req, res) {
   console.log("call kiya", req.query.uid);
   conn.query(`DELETE FROM users WHERE id=${req.query.uid}`, function (err, rows, fields) {
      if (err) throw err;
      res.end(`Record has been deleted!`);
   });
});
//Delete User

var server = app.listen(3200, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(`App listening at http://home`, host, port)
})