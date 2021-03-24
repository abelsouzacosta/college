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
    try {
      let address = await knex('addresses')
      .where('student_id', student_id);

      const [{ id, country, state, city, district, street, cep }] = address;

      const { _country = country, _state = state, _city = city,
        _district = district, _street = street, _cep = cep } = req.body;

      await knex('addresses')
            .where('id', id)
            .update({
              country: _country,
              state: _state,
              city: _city,
              district: _district,
              street: _street,
              cep: _cep
            });

      return res.status(200).send({ message: "Ok" });
    } catch (err) {
      next(err);
    }
  }
}
