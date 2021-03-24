const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

router
  .get('/list', StudentsController.index);

module.exports = router;
