const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const jsonToObject = json => JSON.parse(json)
const getPrice = item => item.preco
const prices = carrinho.map(jsonToObject).map(getPrice)
console.log(prices)