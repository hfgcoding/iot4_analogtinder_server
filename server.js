var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

let dataStore = {};

server.listen(8099);

app.get('/measure', function (req, res) {
  console.log(req)
  let rssi = req.query.rssi;
  let srcid = req.query.srcid;
  let partnerid = req.query.partnerid;
  if(rssi != undefined && srcid != undefined && partnerid != undefined) {
    if(dataStore.hasOwnProperty(srcid)) {
        dataStore[srcid].lastUpdate = new Date().getTime();
        dataStore[srcid].peers[partnerid] = {"rssi": rssi, "lastSeen":new Date().getTime()}
    } else{
        dataStore[srcid] = {};
        dataStore[srcid].lastUpdate = new Date().getTime();
        dataStore[srcid].peers = {};
        dataStore[srcid].peers[partnerid] = {"rssi": rssi, "lastSeen":new Date().getTime()}
    }
    res.send("OK");
    console.log(dataStore);
  } else {
    res.send("Error: "+JSON.stringify(req));
  }
});

io.on('connection', function (socket) {
  console.log("Connection")
  socket.emit('init', JSON.stringify(dataStore));
  socket.on('getdata', function () {
    socket.emit('data', JSON.stringify(dataStore));
  });
});