
exports.up = function(knex) {
  return knex.schema.createTable('bcrypt_hashes', (table) => {
    table.increments('id').notNullable().unique();
    table.text('text').notNullable();
    table.text('hash').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bcrypt_hashes');
};
