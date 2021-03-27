const knex = require('../database');

module.exports = {
  async create(req, res, next) {
    const { country = 'Brasil', state, city, district, street, cep, student_id } = req.body;
    try {
      if (!(state || city || district || street || cep || student_id))
        next(new Error('Preencha os campos requisitados'));

      await knex('addresses')
            .insert({
              country, state,
              city, district,
              street, cep,
              student_id
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    const { student_id } = req.params;
    const { country, state, city, district, street, cep } = req.body;
    try {
      let address = await knex('addresses')
      .where('student_id', student_id);

      await knex('addresses')
            .where('id', student_id)
            .update({
              country, state,
              city, district,
              street, cep
            });


      return res.status(200).send({ message: "Ok", street });
    } catch (err) {
      next(err);
    }
  }
}
