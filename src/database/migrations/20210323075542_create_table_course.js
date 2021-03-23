exports.up = knex => knex.schema.createTable('courses', table => {
  table.increments('id');
  table.text('name').notNullable().unique();
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('courses');
