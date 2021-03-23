
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        { name: "Matéria 1" },
        { name: "Matéria 2" },
        { name: "Matéria 3" },
        { name: "Matéria 4" },
        { name: "Matéria 5" },
        { name: "Matéria 6" },
        { name: "Matéria 7" },
        { name: "Matéria 8" },
        { name: "Matéria 9" },
        { name: "Matéria 10" }
      ]);
    });
};
