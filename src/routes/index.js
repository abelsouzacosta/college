const express = require('express');

const router = express.Router();
const subjectRouter = require('./subject.routes');

router.use('/subjects', subjectRouter);

module.exports = { router };
