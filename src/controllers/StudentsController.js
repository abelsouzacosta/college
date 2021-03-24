const knex = require('../database');


module.exports = {
  async index(req, res, next) {
    const { page = 1, student_id } = req.query;
    try {
      const query = knex('students')
                  .limit(5)
                  .offset((page - 1) * 5);

      let result;

      if (student_id) {
        query.where('id', student_id);
        const [{ name, cpf, course_id }] = await query;
        const coursename = await knex('courses')
                                  .select('name')
                                  .where('id', course_id);
        result = {
          name,
          cpf,
          coursename
        };
        return res.status(200).json(result);
      }

      result = await query;

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    const { name, cpf, course_id } = req.body;
    try {
      if (!(name || cpf || course_id))
        next(new Error('Por favor preencha todos os campos'));

      await knex('students')
            .insert({
              name, cpf, course_id
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const student = await knex('students')
      .where('id', id);

      const [{ name, cpf, course_id }] = student;

      const { _name = name, _cpf = cpf, _course_id = course_id } = req.body;

      await knex('students')
            .where('id', id)
            .update({
              name: _name,
              cpf: _cpf,
              course_id: _course_id
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  }
};
