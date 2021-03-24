const express = require('express');
const TeachersController = require('../controllers/TeachersController');
const router = express.Router();

router
  .get('/list', TeachersController.index)
  .post('/create', TeachersController.create)
  .put('/update/:id', TeachersController.update)
  .delete('/delete/:id', TeachersController.delete);

module.exports = router;
