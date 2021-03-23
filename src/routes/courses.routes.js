const express = require('express');
const CoursesController = require('../controllers/CoursesController');

const router = express.Router();

router
  .get('/list', CoursesController.index);

module.exports = router;
