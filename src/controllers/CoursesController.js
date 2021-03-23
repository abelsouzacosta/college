const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    const { page = 1 } = req.query;
    try {
      const query = knex('courses')
                    .limit(5)
                    .offset((page - 1) * 5);

      const result = await query;

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
