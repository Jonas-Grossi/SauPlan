
exports.up = function (knex, Promise) {
    return knex.schema.createTable('surgerysus', table => {

        table.increments('id').primary()
        table.string('name').notNull()
        table.string('cel')
        table.string('email')
        table.string('prioridade').notNull()
        table.string('dataSolicitacao').notNull()
        table.string('dataEntrada').notNull()
        table.string('dataMarcada').notNull()
        table.string('localConsulta').notNull()
        table.string('status').notNull()
        table.string('obs')

    })

};


exports.down = function (knex, Promise) {
    return knex.schema.dropTable('surgerysus')

};
