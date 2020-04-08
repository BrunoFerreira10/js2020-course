// Estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c
}
console.log(soma1(10,20,30)) // Return 60
console.log(soma1(0,0,0)) // Return 3 !!!!!!!!!!!!!!
console.log("-------------------------------------")

// 3 Estrategias para inicialização de valores padrãp
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(10,20,30)) // Return 60
console.log(soma2(0,0,0)) // Return 0
console.log(soma2()) // Return 3
console.log("-------------------------------------")

// Valor padrão do ES2015
let d = 1
function soma3(a = 1, b = d, c = soma2(1,0,0)){
    return a + b + c
}
console.log(soma3(10,20,30)) // Return 60
console.log(soma3(0,0,0)) // Return 0
console.log(soma3()) // Return 3
