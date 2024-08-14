// Create web server

// create a web server for comments
// =================================
// import modules

const express = require('express');
const router = express.Router();
const comentController = require('../controllers/comments');

// handle requests

router.get('/', comentController.commentList);
router.get('/create', comentController.comment_create_get);
router.post('/create', commentController. comment_create_POST);
router.get('/:id/delete', commentController. comment_delete_get);



