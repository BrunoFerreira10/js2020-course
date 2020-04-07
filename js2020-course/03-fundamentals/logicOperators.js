function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor 'gambiarra
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}  
    /* ES2015: Pode-se gerar objetos com atributos com os mesmos nomes
     e valores no identificador quando se omite a chave
     */
}

console.log(compras(true, true));
console.log(compras(false, true));
console.log(compras(true, false));
console.log(compras(false, false));