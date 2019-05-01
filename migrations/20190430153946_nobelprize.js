
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nobelprize', table =>{
      table.increments('id').primary()
      table.string('firstname')
      table.string('surname')
      table.string('category')
      table.string('motivation')
      table.string('year')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('nobelprize')
};
