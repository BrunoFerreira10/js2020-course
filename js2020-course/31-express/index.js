const express = require('express')
const greeting = require('./greetingMiddleware')

const app = express()

app.use(greeting('Joao'))

app.use((res, req, next ) => {
    console.log("Before...")
    next()
})

// http://localhost:3000/clients/report/?complete=true&year=2020
app.get('/clients/report', (req, res) => {
    res.send(`Client report: Complete = ${req.query.complete}, Year = ${req.query.year}!`)
})

app.post('/body', (req, res) => {
    let body = ''
    req.on('data', function(part) {
        body += part
    })

    req.on('end', function() {
        res.send(body)
    })
})

// http://localhost:3000/clients/10
app.get('/clients/:id', (req, res) => {
    res.send(`Client ${req.params.id} selected!`)
})

app.get('/opa', (req, res, proxima) => {
    console.log("While...")
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    proxima()
})

app.use((req, res) => {
    console.log("After...")    
})

app.listen(3000, () => {
    console.log('Backend running...')
})
