
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        { name: "Curso 1" },
        { name: "Curso 2" },
        { name: "Curso 3" },
        { name: "Curso 4" },
        { name: "Curso 5" },
        { name: "Curso 6" },
        { name: "Curso 7" },
        { name: "Curso 8" },
        { name: "Curso 9" },
        { name: "Curso 10" },
        { name: "Curso 11" }
      ]);
    });
};
