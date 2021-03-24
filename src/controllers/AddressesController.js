const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    const { page = 1 } = req.query;
    try {

    } catch (err) {
      next(err);
    }
  }
}
