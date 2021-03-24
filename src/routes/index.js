const express = require('express');

const router = express.Router();
const subjectRouter = require('./subject.routes');
const courseRouter = require('./courses.routes');
const teacherRouter = require('./teachers.routes');
const studentRouter = require('./students.routes');
const addressRouter = require('./addresses.routes');

router.use('/subjects', subjectRouter);
router.use('/courses', courseRouter);
router.use('/teachers', teacherRouter);
router.use('/students', studentRouter);
router.use('/addresses', addressRouter);

module.exports = { router };
