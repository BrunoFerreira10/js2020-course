const fs = require('fs')

const product = {
    name: 'Mobile',
    price: 1249.99,
    discount: 0.15
}

fs.writeFile(__dirname + '/fileGenerated.json', JSON.stringify(product), err => {
    console.log(err || 'File saved!')
})