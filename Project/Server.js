io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('join-chat', (chatId) => {
      console.log(`User joined chat ${chatId}`);
      socket.join(chatId);
    });
  
    socket.on('leave-chat', (chatId) => {
      console.log(`User left chat ${chatId}`);
      socket.leave(chatId);
    });
  
    socket.on('send-message', ({ chatId, message }) => {
      console.log(`Received message in chat ${chatId}: ${message}`);
      io.to(chatId).emit('new-message', { item: message });
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  