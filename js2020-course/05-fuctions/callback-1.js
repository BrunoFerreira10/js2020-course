const fabricantes = ["Mercedes", "Audi", "BMW"]
p = "@";

function imprimir(nome, indice){

    console.log(`${this.p} - ${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir, global)