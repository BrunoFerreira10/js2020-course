// My impementation
Array.prototype.map2 = function(callback, thisArg = this) {
    const mappedArray = []
    for (let i = 0; i < thisArg.length; i++){
        mappedArray.push(callback(thisArg[i], i, thisArg))
    }
    return mappedArray
}

// Class implementation
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        mappedArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const jsonToObject = json => JSON.parse(json)
const getPrice = item => item.preco
const prices = carrinho.map2(jsonToObject).map2(getPrice)
console.log(prices)