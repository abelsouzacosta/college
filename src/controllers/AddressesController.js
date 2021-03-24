const knex = require('../database');

module.exports = {
  async create(req, res, next) {
    const { country = 'Brasil', state, city, district, street, cep, student_id } = req.body;
    try {
      if (!(state || city || district || street || cep || student_id))
        next(new Error('Preencha os campos requisitados'));

      await knex('adresses')
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
  }
}
