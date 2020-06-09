const express = require('express')
const greeting = require('./greetingMiddleware')

const app = express()

app.use(greeting('Joao'))

app.use((res, req, next ) => {
    console.log("Before...")
    next()
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
