// Create web server
// Date: 04/05/2021
// Programmer: Philip Kempton

// Import express
const express = require('express');
// Import comment controller
const commentsController = require('../controllers/commentsController');
// Create express router
const router = express.Router();

// Handle GET request for /comments
router.get('/', commentsController.comments_get);

// Handle POST request for /comments
router.post('/', commentsController.comments_post);

// Handle GET request for /comments/delete
router.get('/delete', commentsController.comments_delete_get);

// Handle POST request for /comments/delete
router.post('/delete', commentsController.comments_delete_post);

// Export router
module.exports = router;