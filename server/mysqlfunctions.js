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
	con.query("select * from userInfo limit 50000", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetUserInfo(rows, start)));
	})
};

function serverAnswerGetUserInfo(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
	for (var i=0; i<Rows.length; i++) {
        result.push({
        	id: Rows[i].id,
        	email: Rows[i].email,
        	salt: Rows[i].salt,
        	hash: Rows[i].hash
        })
    }
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
	for (var i=0; i<Rows.length; i++) {
        result.push({
        	id: Rows[i].id,
        	mask: Rows[i].mask,
        	vendor: Rows[i].vendor
        })
    }
    result.push({
    	duration: duration
    })
    return result;
}

exports.getUserInfoJoinUserDevice = function getUserInfoJoinUserDevice(start, callback) {
	con.query("select * from userDevice ud JOIN deviceInfo di on ud.deviceID = di.id limit 50000", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetUserInfoJoinUserDevice(rows, start)));
	})
};

function serverAnswerGetUserInfoJoinUserDevice(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
	for (var i=0; i<Rows.length; i++) {
        result.push({
        	deviceID: Rows[i].deviceID,
        	email: Rows[i].email
        })
    }
    result.push({
    	duration: duration
    })
    return result;
}

exports.getUserInfoJoinUserDeviceJoinDeviceInfo = function getUserInfoJoinUserDeviceJoinDeviceInfo(start, callback) {
	con.query("select * from userDevice ud INNER JOIN deviceInfo di on ud.deviceID = di.id INNER JOIN userInfo ui on ui.id = ud.loginID limit 1000", function (err, rows) {
		callback(null, JSON.stringify(serverAnswerGetUserInfoJoinUserDeviceJoinDeviceInfo(rows, start)));
	})
};

function serverAnswerGetUserInfoJoinUserDeviceJoinDeviceInfo(Rows, Start) {
	var result = [];
	var duration = Date.now() - Start;
	for (var i=0; i<Rows.length; i++) {
        result.push({
        	deviceID: Rows[i].deviceID,
        	email: Rows[i].email,
        	vendor: Rows[i].vendor
        })
    }
    result.push({
    	duration: duration
    })
    return result;
}

exports.insertUser = function insertUser(start, callback) {
	con.query("INSERT INTO `dbms`.`userinfo` (`id`, `email`, `salt`, `hash`) VALUES ('1', '231', '41421', '1421124')", function (err, rows) {
		var result = {};
        if (rows.affectedRows = 1) result = {'status' : 'done'};
        else result = {'status' : 'fail'};
        callback(null, result);
	})
}

exports.deleteUser = function deleteUser(start, callback) {
	con.query("DELETE FROM `dbms`.`userinfo` WHERE `id`='1')", function (err, rows) {
		var result = {};
        if (rows.affectedRows = 1) result = {'status' : 'done'};
        else result = {'status' : 'fail'};
        callback(null, result);
	})
}

exports.updateUser = function updateUser(start, callback) {
	con.query("UPDATE `dbms`.`userinfo` SET `email`='234' WHERE `id`='1'", function (err, rows) {
		var result = {};
        if (rows.affectedRows = 1) result = {'status' : 'done'};
        else result = {'status' : 'fail'};
        callback(null, result);
	})
}