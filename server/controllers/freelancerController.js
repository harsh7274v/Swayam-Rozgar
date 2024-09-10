
// const Freelancer = require('../models/freelancer');

// // Get all freelancers
// exports.getAllFreelancers = async (req, res) => {
//     try {
//         const freelancers = await Freelancer.find();
//         res.status(200).json(freelancers);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get a freelancer by ID
// exports.getFreelancerById = async (req, res) => {
//     try {
//         const freelancer = await Freelancer.findById(req.params.id);
//         if (!freelancer) {
//             return res.status(404).json({ message: 'Freelancer not found' });
//         }
//         res.status(200).json(freelancer);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Create a new freelancer profile
// exports.createFreelancer = async (req, res) => {
//     const { name, skills, skillLevels, workHistory, portfolio, rating, microServices, keywords, clusterId } = req.body;

//     try {
//         const newFreelancer = new Freelancer({ name, skills, skillLevels, workHistory, portfolio, rating, microServices, keywords, clusterId });
//         const savedFreelancer = await newFreelancer.save();
//         res.status(201).json(savedFreelancer);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Update a freelancer profile by ID
// exports.updateFreelancer = async (req, res) => {
//     const updates = req.body;
//     try {
//         const freelancer = await Freelancer.findByIdAndUpdate(req.params.id, updates, { new: true });
//         if (!freelancer) {
//             return res.status(404).json({ message: 'Freelancer not found' });
//         }
//         res.status(200).json(freelancer);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Delete a freelancer profile by ID
// exports.deleteFreelancer = async (req, res) => {
//     try {
//         const freelancer = await Freelancer.findByIdAndDelete(req.params.id);
//         if (!freelancer) {
//             return res.status(404).json({ message: 'Freelancer not found' });
//         }
//         res.status(200).json({ message: 'Freelancer deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


const Freelancer = require('../models/Freelancer');
const bcrypt = require('bcryptjs');

// Get all freelancers
exports.getAllFreelancers = async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a freelancer by ID
exports.getFreelancerById = async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });
    res.status(200).json(freelancer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new freelancer profile
exports.createFreelancer = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      bio,
      skills,
      skillLevels,
      workHistory,
      portfolio,
      microServices,
      keywords
    } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new freelancer
    const freelancer = new Freelancer({
      name,
      email,
      password: hashedPassword,
      bio,
      skills,
      skillLevels,
      workHistory,
      portfolio,
      microServices,
      keywords
    });

    await freelancer.save();
    res.status(201).json({ message: 'Freelancer created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a freelancer profile by ID
exports.updateFreelancer = async (req, res) => {
  try {
    const freelancer = await Freelancer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });

    res.status(200).json(freelancer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a freelancer profile by ID
exports.deleteFreelancer = async (req, res) => {
  try {
    const freelancer = await Freelancer.findByIdAndDelete(req.params.id);
    if (!freelancer) return res.status(404).json({ message: 'Freelancer not found' });

    res.status(200).json({ message: 'Freelancer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
