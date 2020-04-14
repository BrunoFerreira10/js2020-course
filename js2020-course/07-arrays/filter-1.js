const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]


console.log(produtos.filter(function(p) {
    // If return true the value is included in final array
    return false
}))

// My implementation
const isExpensive = p => p.preco > 2000
const isFragile = p => p.fragil
const listProdutos = produtos.filter(isExpensive).filter(isFragile)
console.log(listProdutos)

// Class implementation
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))
