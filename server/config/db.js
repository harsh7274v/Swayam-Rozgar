const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the MONGO_URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
