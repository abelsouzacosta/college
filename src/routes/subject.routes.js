const express = require('express');
const SubjectsController = require('../controllers/SubjectsController');

const router = express.Router();

router
  .get('/list', SubjectsController.index);

module.exports = router;
