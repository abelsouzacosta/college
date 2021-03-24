
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        { name: "Professora Maria", age: 55, subject_id: 5 },
        { name: "Professora Joana", age: 51, subject_id: 8 },
        { name: "Professora Claudia", age: 63, subject_id: 9},
        { name: "Professora Marta", age: 78, subject_id: 2 },
        { name: "Professor Guilherme", age: 34, subject_id: 3 },
        { name: "Professor Gustavo", age: 32, subject_id: 4 },
        { name: "Professor João", age: 43, subject_id: 1 },
        { name: "Professor Lucas", age: 45, subject_id: 6 }
      ]);
    });
};
