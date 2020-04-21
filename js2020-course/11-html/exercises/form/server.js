const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Congratulations! User created!</h1>')
})

app.post('/users/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Congratulations! User updated!</h1>')
})

app.listen(3003)