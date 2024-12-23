const { Server } = require('socket.io');

const io = new Server(3001, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('enviarNombre', (nombre) => {
    io.emit('recibirNombre', nombre);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

console.log('Servidor Socket.IO corriendo en el puerto 3001');
