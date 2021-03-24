const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    const { page = 1 } = req.query;
    try {
      let query = knex('teachers')
                  .limit(5)
                  .offset((page - 1) * 5);

      let result = await query;

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    const { name, age, subject_id } = req.body;
    try {
      if (!(name || age || subject_id))
        next(new Error('Por favor preencha os campos requisitados'));

      await knex('teachers')
            .insert({
              name, age, subject_id
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  }
}
