
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        { country: "Brasil", state: "SP", city: "São Paulo", district: "Moema", street: "Rua Gaivota", cep: "08373-240", student_id: 1 },
        { country: "Brasil", state: "SP", city: "São Paulo", district: "Moema", street: "Rua Gaivota", cep: "08373-240", student_id: 2 },
        { country: "Brasil", state: "SP", city: "São Paulo", district: "Moema", street: "Rua Gaivota", cep: "08373-240", student_id: 3 },
        { country: "Brasil", state: "SP", city: "São Paulo", district: "Moema", street: "Rua Gaivota", cep: "08373-240", student_id: 4 },
        { country: "Brasil", state: "SP", city: "São Paulo", district: "Moema", street: "Rua Gaivota", cep: "08373-240", student_id: 5 },
      ]);
    });
};
