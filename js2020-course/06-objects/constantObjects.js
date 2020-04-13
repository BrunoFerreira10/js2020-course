// memoria pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// memoria pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana'} // Error

Object.freeze(pessoa) // Congela o objeto
pessoa.nome = "Maria" // Não gera erro, porém é ignorado

console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

