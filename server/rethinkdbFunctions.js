r = require('rethinkdb');

exports.rgetUserInfo = function rgetUserInfo(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('deviceinfo').count().run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRGetUserInfo(start)));
  		});
	});
};

function serverAnswerRGetUserInfo(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rgetAppleDeviceInfo = function rgetAppleDeviceInfo(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('deviceinfo').filter({vendor:"Apple Inc."}).count().run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRGetAppleDeviceInfo(start)));
  		});
	});
};

function serverAnswerRGetAppleDeviceInfo(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rgetUserInfoJoinUserDevice = function rgetUserInfoJoinUserDevice(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table("userdevice").innerJoin(r.table("deviceinfo"), function (userdevice, deviceinfo) {return userdevice("deviceid").eq(deviceinfo("id"));}).zip().limit(10).count().run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRGetUserInfoJoinUserDevice(start)));
  		});
	});
};

function serverAnswerRGetUserInfoJoinUserDevice(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rinsertUser = function rinsertUser(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('deviceinfo').insert({id:100000000,mash:100000,vendor:"asdad"}).run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRInsertUser(start)));
  		});
	});
};

function serverAnswerRInsertUser(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rdeleteUser = function rdeleteUser(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('deviceinfo').filter({id:100000000}).run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRDeleteUser(start)));
  		});
	});
};

function serverAnswerRDeleteUser(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}

exports.rupdateUser = function rupdateUser(start, callback) {
	r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  		if(err) throw err;
  		r.db('dbms').table('deviceinfo').filter({id:100000000}).update({mash:"asddsgfg"}).run(conn, function(err, res) {
    		if(err) throw err;
    		console.log(res);
    		callback(null, JSON.stringify(serverAnswerRUpdateUser(start)));
  		});
	});
};

function serverAnswerRUpdateUser(Start) {
	var result = [];
	var duration = Date.now() - Start;
    result.push({
    	duration: duration
    })
    return result;
}
