const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

router
  .get('/list', StudentsController.index)
  .post('/create', StudentsController.create)
  .put('/update/:id', StudentsController.update)
  .delete('/delete/:id', StudentsController.delete);

module.exports = router;
