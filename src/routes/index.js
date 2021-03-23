const express = require('express');

const router = express.Router();
const subjectRouter = require('./subject.routes');
const courseRouter = require('./courses.routes');

router.use('/subjects', subjectRouter);
router.use('/courses', courseRouter);

module.exports = { router };
