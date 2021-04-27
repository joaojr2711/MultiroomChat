const app = require("./config/server");

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running... 🚀`);
})

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {
  console.log(`Socket Conected`);

  socket.on('disconnect', () => {
    console.log(`Socket Disconect`);
  })


  socket.on('messageInput', (data) => {

    // Dialogs
    socket.emit('msg', { apelido: data.apelido, message: data.message });

    socket.broadcast.emit('msg', { apelido: data.apelido, message: data.message });

    // Participants
    if(parseInt(data.apelido_atualizado) == 0){
      socket.emit('peoples', { apelido: data.apelido });

      socket.broadcast.emit('peoples', { apelido: data.apelido });
    }

  });
})