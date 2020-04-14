// Linux = Case sensitive
// MAC and Windows = Case insensitive
const moduloA = require('../../moduloA')
const moduloB = require('d:/Workspaces/ws-vscode/js2020-course/08-node/moduloB')
console.log(moduloA.ola)
console.log(moduloB.bomDia)

// Using index.js in node_modules/module
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// Modules core
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!') 
    res.end() 
}).listen(8080)
