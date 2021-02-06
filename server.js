const express = require('express')

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'swetabhmukherjee',
    password : 'password',
    database : 'server-db',
    port: 5432
  }
});

// Controllers - aka, the db queries
const main = require('./controllers')

// App
const app = express()

// App Routes - Auth
app.get('/', (req, res) => res.send('API Endpoint'))
app.get('/crud', (req, res) => main.getTableData(req, res, db))
app.post('/crud', (req, res) => main.postTableData(req, res, db))
app.get('/crud', (req, res) => main.putTableData(req, res, db))
app.put('/crud/update', (req, res) => main.putTableData(req, res, db))
app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
app.listen( 3000, () => {
  console.log(`Server is UP and running on port 3000`)
})