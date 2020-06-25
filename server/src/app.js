const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql')
const config = require('./config/config')
// const {sequelize} = require('./models')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: ''
// });

// con.connect((err) => {
//     if (err) throw (err)
//     console.log('Connected')
// })


app.listen(config.port || 8081)