const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
var connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) value ('Robson 4')"
connection.query(sql)

app.get('/', (req,res)=> {
    connection.query('SELECT Name FROM nodedb.people ORDER BY id asc', function (err, results) {
        if (err) {
          //req.flash('error', err)
          res.send(`<h1>Full Cycle Rocks!</h1><br /> <br />Sem Registro ! <br /> ${err}`)
        } else {
          res.send(`<h1>Full Cycle Rocks!</h1><br /> <br />${JSON.stringify(results)}`)
        }
      })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})