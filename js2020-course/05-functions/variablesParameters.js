function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma(10,20,30))
console.log(soma('A','B','C'))