function real(parts, ...values){
    const result = []
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `R$${value.toFixed(2).toString().replace('.',',')}`
        result.push(parts[index], value)
    })
    return result.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(`1x de ${preco} ou 3x de ${precoParcela}`)
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)