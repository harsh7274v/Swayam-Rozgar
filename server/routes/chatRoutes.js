const express = require('express');
const { getMessages } = require('../controllers/chatController');
const router = express.Router();

// Route to get messages between users
router.get('/:senderId/:receiverId', getMessages);

module.exports = router;
