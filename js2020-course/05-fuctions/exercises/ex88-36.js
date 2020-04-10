const arrayMult = (array, multiplier) => {
     array.forEach((n,i) => array[i] = n * multiplier)     
     return array 
}   

const arrayMultGt5 = (array, multiplier) => {
    let results = []
    array.forEach(n => {        
        if(n > 5){
            results.push(n * multiplier)
        }
    })     
    return results    
}


// My tests
console.log("--------- My tests ----------");
console.log('1.) ', arrayMult([1,3,5,7,9],10))
console.log('2.) ', arrayMultGt5([1,3,5,7,9],10))

// Answer tests
console.log("--------- Answer tests ----------");

// Answer
/*let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
*/
