// let and const
{
    var a = 2
    let b = 2
}
console.log(a)
// console.log(b) // Error

// Template string
const product = 'iPad'
console.log(`${product} é caro!`)

// Destructuring
const [l, e, ...more] = 'Cod3r'
console.log(l)
console.log(e)
console.log(more)

const [x, y] = [1, 2]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade:9}
console.log(i, nome)

