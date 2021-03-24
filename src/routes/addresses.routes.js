const express = require('express');
const AddressesController = require('../controllers/AddressesController');
const router = express.Router();

router
  .post('/create', AddressesController.create)
  .put('/update/:student_id', AddressesController.update);

module.exports = router;
