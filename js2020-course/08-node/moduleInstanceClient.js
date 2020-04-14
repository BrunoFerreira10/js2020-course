const counterA = require('./uniqueInstanceModule')
const counterB = require('./uniqueInstanceModule')
const counterC = require('./newInstanceModule')()
const counterD = require('./newInstanceModule')()

counterA.inc()
counterA.inc()
console.log(counterA.valor, counterB.valor)

counterC.inc()
counterC.inc()
console.log(counterC.valor, counterD.valor)