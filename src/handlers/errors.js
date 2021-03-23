module.exports = {
  not_found(req, res, next) {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
  },

  catch_all(error, req, res, next) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
