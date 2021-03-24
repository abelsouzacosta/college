exports.up = knex => knex.schema.createTable('students', table => {
  table.increments('id');
  table.text('name').notNullable();
  table.text('cpf').notNullable();
  table.integer('course_id')
  .references('courses.id')
  .notNullable()
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('students');
