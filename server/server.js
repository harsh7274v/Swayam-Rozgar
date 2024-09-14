const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');


const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); 
const Freelancer = require('./models/Freelancer');


// Import routes
const freelancerRoutes = require('./routes/freelancerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const microConsultancyRoutes = require('./routes/microConsultancyRoutes'); 

// Load environment variables


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



app.post('/signup', async (req, res) => {
    const { name, email, password, bio, skills, portfolio } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new freelancer object
        const freelancer = new Freelancer({
            name,
            email,
            password: hashedPassword,
            bio,
            skills,
            portfolio
        });

        // Save the freelancer to the database
        await freelancer.save();

        res.status(201).send({ message: 'Signup successful!' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const freelancer = await Freelancer.findOne({ email });
        if (!freelancer) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, freelancer.password);

        // Check if password matches
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        // If login is successful, send a response
        res.status(200).send({ message: 'Login successful!' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});




// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


