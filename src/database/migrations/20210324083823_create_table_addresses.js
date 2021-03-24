exports.up = knex => knex.schema.createTable('addresses', table => {
  table.increments('id');
  table.text('country').notNullable();
  table.text('state').notNullable();
  table.text('city').notNullable();
  table.text('district').notNullable();
  table.text('street').notNullable();
  table.text('cep').notNullable();
  table.integer('student_id')
  .references('students.id')
  .notNullable()
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('addresses');
