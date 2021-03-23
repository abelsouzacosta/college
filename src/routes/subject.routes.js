const express = require('express');
const SubjectsController = require('../controllers/SubjectsController');

const router = express.Router();

router
  .get('/list', SubjectsController.index)
  .post('/create', SubjectsController.create)
  .put('/update/:id', SubjectsController.update)
  .delete('/delete/:id', SubjectsController.delete);

module.exports = router;
