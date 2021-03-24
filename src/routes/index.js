const express = require('express');

const router = express.Router();
const subjectRouter = require('./subject.routes');
const courseRouter = require('./courses.routes');
const teacherRouter = require('./teachers.routes');

router.use('/subjects', subjectRouter);
router.use('/courses', courseRouter);
router.use('/teachers', teacherRouter);

module.exports = { router };
