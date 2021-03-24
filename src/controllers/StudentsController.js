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
  }
};
