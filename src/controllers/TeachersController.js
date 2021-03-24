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
  }
}
