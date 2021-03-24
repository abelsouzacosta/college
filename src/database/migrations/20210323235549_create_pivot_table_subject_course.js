exports.up = knex => knex.schema.createTable('subject_course', table => {
  table.increments('id');
  table.integer('subject_id')
  .references('subjects.id')
  .notNullable()
  .onDelete('CASCADE');
  table.integer('course_id')
  .references('courses.id')
  .notNullable()
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('subject_course');
