const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    const { page = 1 } = req.query;
    try {
      const query = knex('subjects')
                    .limit(5)
                    .offset((page - 1) * 5);

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
        next(new Error('Preencha o campo requisitado'));

      const subject = await knex('subjects')
                            .insert({
                              name
                            });

      if (subject <= 0)
        next(new Error('Não foi possível criar uma nova matéria dentro do banco de dados'));

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
        next(new Error("Preencha os campos requisitados"));

      await knex('subjects')
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
      await knex('subjects')
            .where('id', id)
            .del();

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  }
};
