const server = require('http').createServer();
const os = require('os-utils');

const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

let seconds = 0;
io.on('connection', client => {
    console.log("A client connected!")

  setInterval(() => {
    os.cpuUsage(cpuPercentage => {
      client.emit('cpu', {
        second: seconds++,
        value: cpuPercentage
      });
    });
  }, 1000);

});
server.listen(3000);
console.log("Server started on Port : 3000! ")
