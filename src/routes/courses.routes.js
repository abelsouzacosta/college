const express = require('express');
const CoursesController = require('../controllers/CoursesController');

const router = express.Router();

router
  .get('/list', CoursesController.index)
  .post('/create', CoursesController.create)
  .put('/update/:id', CoursesController.update)
  .delete('/delete/:id', CoursesController.delete);

module.exports = router;
