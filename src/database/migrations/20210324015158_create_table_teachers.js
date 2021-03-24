exports.up = knex => knex.schema.createTable('teachers', table => {
  table.increments('id');
  table.text('name').notNullable();
  table.integer('age').notNullable();
  table.integer('subject_id')
  .references('subjects.id')
  .notNullable()
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('teachers');
