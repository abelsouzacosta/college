
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: "Maria Fernanda", cpf: "33333333", course_id: 2 },
        { name: "Fernanda Maria", cpf: "33333333", course_id: 2 },
        { name: "Gisele Dias", cpf: "33333333", course_id: 1 },
        { name: "Lucas Moura", cpf: "33333333", course_id: 5 },
        { name: "Fernando Moura", cpf: "33333333", course_id: 4 },
        { name: "Camilla Mota", cpf: "33333333", course_id: 1 },
        { name: "Vinicius Reis", cpf: "33333333", course_id: 2 },
        { name: "Pablo Aguiar", cpf: "33333333", course_id: 1 },
        { name: "Nicole Dias", cpf: "33333333", course_id: 3 },
        { name: "Gisele Motta", cpf: "33333333", course_id: 2 }
      ]);
    });
};
