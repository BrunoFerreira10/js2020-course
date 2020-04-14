const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
let todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)
todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log([].concat([1,2],[3,4],5,[[6,7]]))
console.log(['a','b'].concat([1,2],[3,4],5,[[6,7]]))