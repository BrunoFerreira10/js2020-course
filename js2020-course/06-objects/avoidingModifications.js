// Object.preventExtensions = Cannot add new attributes
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal = Cannot add or remove attributes
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.nome = 'Mariana'
pessoa.salario = 2000
delete pessoa.idade
console.log(pessoa)

// Object.freeze = sealed more constant values