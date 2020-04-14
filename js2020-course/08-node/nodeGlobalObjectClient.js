require('./nodeGlobalObject')

console.log(MinhaApp.saudacao())
console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.nome)
console.log(global.MinhaApp.nome)

global.MinhaApp = {}
global.MinhaApp.nome = "Eita!"
console.log(MinhaApp.nome)
console.log(global.MinhaApp.nome)
