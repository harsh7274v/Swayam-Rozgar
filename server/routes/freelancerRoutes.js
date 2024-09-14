// const express = require('express');
// const router = express.Router();
// const freelancerController = require('../controllers/freelancerController');

// // Route to get all freelancers
// router.get('/', freelancerController.getAllFreelancers);

// // Route to get a freelancer by ID
// router.get('/:id', freelancerController.getFreelancerById);

// // Route to create a new freelancer profile
// router.post('/', freelancerController.createFreelancer);

// // Route to update a freelancer profile by ID
// router.put('/:id', freelancerController.updateFreelancer);

// // Route to delete a freelancer profile by ID
// router.delete('/:id', freelancerController.deleteFreelancer);

// module.exports = router;


const express = require('express');
const router = express.Router();
const freelancerController = require('../controllers/freelancerController');
const authMiddleware = require('../middleware/authMiddleware'); 
// Assuming you have auth middleware

// Route to get all freelancers (Public)
router.get('/', freelancerController.getAllFreelancers);

// Route to get a freelancer by ID (Public)
router.get('/:id', freelancerController.getFreelancerById);

// Route to create a new freelancer profile (Public - Signup)
router.post('/', freelancerController.createFreelancer);

// Route to update a freelancer profile by ID (Protected)
router.put('/:id', authMiddleware, freelancerController.updateFreelancer);

// Route to delete a freelancer profile by ID (Protected)
router.delete('/:id', authMiddleware, freelancerController.deleteFreelancer);

module.exports = router;
