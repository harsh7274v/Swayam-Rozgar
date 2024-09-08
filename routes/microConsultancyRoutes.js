// const express = require('express');
// const router = express.Router();
// const employerController = require('../controllers/employerController');

// // Route to post a micro-consultancy job
// router.post('/postJob', employerController.postJob);

// module.exports = router;
const express = require('express');
const router = express.Router();
const microConsultancyController = require('../controllers/microConsultancyController');

// Define routes
router.post('/', microConsultancyController.createMicroConsultancy);
router.get('/', microConsultancyController.getAllMicroConsultancies);
router.get('/:id', microConsultancyController.getMicroConsultancyById);
router.put('/:id', microConsultancyController.updateMicroConsultancy);
router.delete('/:id', microConsultancyController.deleteMicroConsultancy);

module.exports = router;
