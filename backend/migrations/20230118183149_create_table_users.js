
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {

        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('password').notNull()
        table.string('confirmPassword').notNull()
        table.boolean('admin').notNull().defaultTo(false)

    })

};


exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')

};
