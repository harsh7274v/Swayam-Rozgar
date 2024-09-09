// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const bodyParser = require('body-parser');

// // Import routes
// const freelancerRoutes = require('./routes/freelancerRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
// const microConsultancyRoutes = require('./routes/microConsultancyRoutes'); 

// // Load environment variables
// dotenv.config();

// // Initialize express
// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.static('public'));
// app.use(express.static('static'));

// // Routes
// app.use('/api/freelancers', freelancerRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/microConsultancies', microConsultancyRoutes);




// // Start server
// const PORT = process.env.PORT || 7000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const http = require('http');             // For creating server with Socket.io
const socketIo = require('socket.io');     // Socket.io for real-time chat

// Import routes
const freelancerRoutes = require('./routes/freelancerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const microConsultancyRoutes = require('./routes/microConsultancyRoutes');
const chatRoutes = require('./routes/chatRoutes');  // Chat routes

// Load environment variables
dotenv.config();

// Initialize express
const app = express();
const server = http.createServer(app);    // Create server for Socket.io
const io = socketIo(server);              // Attach socket.io to the server

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('static'));

// Routes
app.use('/api/freelancers', freelancerRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/microConsultancies', microConsultancyRoutes);
app.use('/api/chats', chatRoutes);  // Ensure this route is correct

// Handle Socket.io connections for real-time chat
require('./sockets/chatSocket')(io);  // Import chatSocket and pass io instance

// Start server
const PORT = process.env.PORT || 7000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

