// const Message = require('../models/Message');

// module.exports = (io) => {
//   io.on('connection', (socket) => {
//     console.log('User connected:', socket.id);

//     // Listen for sendMessage event
//     socket.on('sendMessage', async ({ senderId, receiverId, senderRole, receiverRole, message }) => {
//       const newMessage = new Message({
//         senderId,
//         receiverId,
//         senderRole,
//         receiverRole,
//         message,
//       });

//       await newMessage.save();
//       io.emit('receiveMessage', newMessage);  // Send message to all clients
//     });

//     socket.on('disconnect', () => {
//       console.log('User disconnected:', socket.id);
//     });
//   });
// };
const Message = require('../models/Message');  // Import Message model

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Listen for sendMessage event from clients
    socket.on('sendMessage', async ({ senderId, receiverId, senderRole, receiverRole, message }) => {
      const newMessage = new Message({
        senderId,
        receiverId,
        senderRole,
        receiverRole,
        message,
      });

      await newMessage.save();  // Save the message in the database
      io.emit('receiveMessage', newMessage);  // Send the message to all connected clients
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
