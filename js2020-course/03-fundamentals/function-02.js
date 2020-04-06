// Armazenando uma função dentro de uma váriavel (*constante né...)
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a , b) => {
    return a + b
}
console.log(soma(2, 3))


// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const pow2 = a => Math.pow(a,2)
console.log(pow2(7))
