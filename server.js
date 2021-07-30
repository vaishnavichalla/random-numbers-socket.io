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
const port = process.env.PORT || 5000;
server.listen(port);
console.log("Server started on Port : " + port)
