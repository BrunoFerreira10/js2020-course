const fs = require('fs')

const path = __dirname + '/file.json'

// Synchronous 1
const contents = fs.readFileSync(path, 'utf-8')
console.log(contents)

// Synchronous 2
const config = require('./file.json')
console.log(config.db.host)

// Assynchronous
fs.readFile(path, 'utf-8', (err, contents) => {
    const config = JSON.parse(contents)
    console.log(`${config.db.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err, files) => {
    console.log('Folder contents...')
    console.log(files)
})