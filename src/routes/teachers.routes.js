const express = require('express');
const TeachersController = require('../controllers/TeachersController');
const router = express.Router();

router
  .get('/list', TeachersController.index);

module.exports = router;
