function tratarErroELancar(erro){
    throw new Error('Deu erro moço!!!')
}

function tratarErroELancar2(erro){
    throw false
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        console.log('Invalid object');        
        tratarErroELancar2("")
    } finally {
        console.log("Finished");    
    }
}

const obj = {nome: 'Roberto'}
let x = imprimirNomeGritado(obj)
console.log('x = ',x);
