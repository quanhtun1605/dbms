var mysql = require("mysql");

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "1234",
   database: "dbmsfinal"
});

con.connect(function (err) {
    if (err) {
        console.log(err);
        console.log("Failed to connect to database!");
        return;
    }
    console.log("Successfully connected to database!");
});

exports.getUserInfo = function getUserInfo(start, callback) {
	con.query("select * from deviceinfo", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetUserInfo(rows, start)));
	})
};

function serverAnswerGetUserInfo(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.getAppleDeviceInfo = function getAppleDeviceInfo(start, callback) {
	con.query("select * from deviceInfo where vendor = 'Apple Inc.' limit 50000", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetAppleDeviceInfo(rows, start)));
	})
};

function serverAnswerGetAppleDeviceInfo(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.getUserInfoJoinUserDevice = function getUserInfoJoinUserDevice(start, callback) {
	con.query("select * from userDevice ud JOIN deviceInfo di on ud.deviceID = di.id limit 500", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetUserInfoJoinUserDevice(rows, start)));
	})
};

function serverAnswerGetUserInfoJoinUserDevice(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.getUserInfoJoinUserDeviceJoinDeviceInfo = function getUserInfoJoinUserDeviceJoinDeviceInfo(start, callback) {
	con.query("select * from userDevice ud INNER JOIN deviceInfo di on ud.deviceID = di.id INNER JOIN userInfo ui on ui.id = ud.loginID limit 10", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetUserInfoJoinUserDeviceJoinDeviceInfo(rows, start)));
	})
};

function serverAnswerGetUserInfoJoinUserDeviceJoinDeviceInfo(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.insertUser = function insertUser(start, callback) {
	con.query("INSERT INTO `dbms`.`deviceinfo` (`id`, `mask`, `vendor`) VALUES ('1000000000', '231', '41421')", function (err, rows) {
		var result = [];
        var duration = Date.now() - start;
        result = {'duration' : duration};
        callback(null, result);
	})
}

exports.deleteUser = function deleteUser(start, callback) {
	con.query("DELETE FROM `dbms`.`deviceinfo` WHERE `id`='100000000')", function (err, rows) {
		var result = [];
        var duration = Date.now() - start;
        result = {'duration' : duration};
        callback(null, result);
	})
}

exports.updateUser = function updateUser(start, callback) {
	con.query("UPDATE `dbms`.`deviceinfo` SET `mask`='234' WHERE `id`='100000000'", function (err, rows) {
		var result = [];
        var duration = Date.now() - start;
        result = {'duration' : duration};
        callback(null, result);
	})
}