let comparaComThis = function (n, param) {
    console.log(`---------------TESTE: ${n}:${param === this} -----------------------`);
    console.log('### Param: ', param);
    console.log('### this: ', this);
    //console.log(param === this)    
    return param === this
}

console.log('0-)', comparaComThis(0, this))
console.log('1-)', comparaComThis(1, global))

const obj = { nome: 'obj' }
comparaComThis = comparaComThis.bind(obj)
console.log('2-)', comparaComThis(2, global))
console.log('3-)', comparaComThis(3, obj))

let comparaComThisArrow = (n, param) => {
    this.arrowVar = 10
    console.log(`---------------TESTE: ${n}:${param === this} -----------------------`);
    console.log('### Param: ', param);
    console.log('### this: ', this);
    return param === this
}
console.log('4-)', comparaComThisArrow(4, global))
console.log('5-)', comparaComThisArrow(5, module.exports))
console.log('6-)', comparaComThisArrow(6, module))
console.log('7-)', comparaComThisArrow(7, this))

comparaComThisArrow = comparaComThisArrow.bind(obj)
console.log('8-)', comparaComThisArrow(8, obj))
console.log('9-)', comparaComThisArrow(9, module.exports))
console.log('10-)', comparaComThisArrow(10, this))


