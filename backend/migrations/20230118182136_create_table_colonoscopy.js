
exports.up = function (knex, Promise) {
    return knex.schema.createTable('colonoscopy', table => {

        table.increments('id').primary()
        table.string('name').notNull().unique()
        table.string('cel').notNull().unique()
        table.string('email')
        table.string('priory').notNull()
        //corrigir datas
        table.string('dateSolicit').notNull()
        table.string('dateInput').notNull()
        table.string('markedData').notNull()
        table.string('localConsult').notNull()
        table.string('status').notNull()
        table.string('obs')

    })

};


exports.down = function (knex, Promise) {
    return knex.schema.dropTable('colonoscopy')

};
