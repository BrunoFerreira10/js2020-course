// My implementation
Array.prototype.filter2 = function(callback, thisArg = this) {
    const filteredArray = []
    for(let i = 0; i < thisArg.length; i++){
        if(callback(thisArg[i], i, thisArg)){
            filteredArray.push(thisArg[i])
        }
    }
    return filteredArray
}

// Class implementation
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]


console.log(produtos.filter2(function(p) {
    // If return true the value is included in final array
    return false
}))

// My implementation
const isExpensive = p => p.preco > 2000
const isFragile = p => p.fragil
const listProdutos = produtos.filter2(isExpensive).filter2(isFragile)
console.log(listProdutos)

// Class implementation
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter2(caro).filter2(fragil))
