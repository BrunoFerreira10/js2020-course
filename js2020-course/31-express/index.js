const express = require('express')

const app = express()


app.get('/opa',(req, res) => {
    res.send("I'm fine too!")
})

app.listen(3000, () => {
    console.log('Backend running...')
})
