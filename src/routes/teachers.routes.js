const express = require('express');
const TeachersController = require('../controllers/TeachersController');
const router = express.Router();

router
  .get('/list', TeachersController.index)
  .post('/create', TeachersController.create);

module.exports = router;
