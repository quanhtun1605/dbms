r = require('rethinkdb')
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  var start = Date.now();
  r.table('demo').run(conn, function(err, res) {
    if(err) throw err;
    // console.log(res);
    var duration = Date.now() - start;
    console.log("response time: " + duration + " ms");
  });
});