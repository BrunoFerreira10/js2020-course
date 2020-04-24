const formatMoney = (value) => {    
    if(isNaN(value)){
        return 'This value is not a number'
    }
    return 'R$' + value.toFixed(2).replace('.',',')
}

console.log(formatMoney(0.1 + 0.2))

// Answer
/* function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2) */