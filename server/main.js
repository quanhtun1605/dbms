var express = require('express');
var bodyParser = require('body-parser');
var SQL = require('./mysqlFunctions');
var RT = require('./rethinkdbFunctions.js');
var app = express();
var port = 8686;

app.listen(port);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

console.log('Server started! At http://localhost:' + port);

app.get('/getUserInfo', function (req, res) {
   console.log("/getUserInfo");
   var start = Date.now();
   SQL.getUserInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rgetUserInfo', function (req, res) {
   console.log("/rgetUserInfo");
   var start = Date.now();
   RT.rgetUserInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/getAppleDeviceInfo', function (req, res) {
   console.log("/getAppleDeviceInfo");
   var start = Date.now();
   SQL.getAppleDeviceInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rgetAppleDeviceInfo', function (req, res) {
   console.log("/rgetAppleDeviceInfo");
   var start = Date.now();
   RT.rgetAppleDeviceInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/getUserInfoJoinUserDevice', function (req, res) {
   console.log("/getUserInfoJoinUserDevice");
   var start = Date.now();
   SQL.getUserInfoJoinUserDevice(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rgetUserInfoJoinUserDevice', function (req, res) {
   console.log("/rgetUserInfoJoinUserDevice");
   var start = Date.now();
   RT.rgetUserInfoJoinUserDevice(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/getUserInfoJoinUserDeviceJoinDeviceInfo', function (req, res) {
   console.log("/getUserInfoJoinUserDeviceJoinDeviceInfo");
   var start = Date.now();
   SQL.getUserInfoJoinUserDeviceJoinDeviceInfo(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/insertUser', function (req, res) {
   console.log("/insertUser");
   var start = Date.now();
   SQL.insertUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rinsertUser', function (req, res) {
   console.log("/rinsertUser");
   var start = Date.now();
   RT.rinsertUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/deleteUser', function (req, res) {
   console.log("/deleteUser");
   var start = Date.now();
   SQL.deleteUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rdeleteUser', function (req, res) {
   console.log("/rdeleteUser");
   var start = Date.now();
   RT.rdeleteUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/updateUser', function (req, res) {
   console.log("/updateUser");
   var start = Date.now();
   SQL.updateUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});

app.get('/rupdateUser', function (req, res) {
   console.log("/rupdateUser");
   var start = Date.now();
   RT.rupdateUser(start, function (err, result) {
        res.send(result);
        console.log(result);
   })
});
