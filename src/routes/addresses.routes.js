const express = require('express');
const AddressesController = require('../controllers/AddressesController');
const router = express.Router();

router
  .post('/create', AddressesController.create);

module.exports = router;
