const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// Import routes
const freelancerRoutes = require('./routes/freelancerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const microConsultancyRoutes = require('./routes/microConsultancyRoutes'); 

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

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




// Start server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

