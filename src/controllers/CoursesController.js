const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    const { page = 1, course_id } = req.query;
    try {
      let query = knex('courses')
                    .limit(5)
                    .offset((page - 1) * 5);

      if (course_id) {
        query = knex('subject_course')
                .select('subjects.name')
                .innerJoin('subjects', 'subjects.id', 'subject_course.subject_id')
                .innerJoin('courses', 'courses.id', `subject_course.course_id`)
                .where('courses.id', course_id)
                .limit(2)
                .offset((page - 1) * 2);
      }

      const result = await query;

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    const { name } = req.body;
    try {
      if (!name)
        next(new Error('Preencha os campos requisitados'));

      await knex('courses')
            .insert({
              name
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      if (!name)
        next(new Error('Preencha os campos requisitados'));

      await knex('courses')
            .where('id', id)
            .update({
              name
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await knex('courses')
            .where('id', id)
            .del();

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  }
};
