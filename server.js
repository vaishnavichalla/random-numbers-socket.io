const server = require('http').createServer();

const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

io.on('connection', client => {
    console.log("A client connected!")

  setInterval(() => {
   
      var random = Math.random();
      client.emit('random', {
        random
      });
  
  }, 500);

});
server.listen(3000);
console.log("Server started on Port : 3000! ")
