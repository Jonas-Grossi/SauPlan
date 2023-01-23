const app = require('express')()
const consign = require('consign')
const db = require('./config/db.js')




app.db = db
consign()
    .then('./config/')
    .into(app)
app.listen(4000, () => {
    console.log('Backend executando...')
})