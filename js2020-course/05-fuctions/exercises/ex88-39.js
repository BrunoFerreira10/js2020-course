function exchangeArrays(arr1 = [], arr2 = []){
    if(arr1.length != arr2.length){
        console.log('Arrays do not has the same size!')        
        return
    }

    arr1.forEach((element,i) => {
        arr1.unshift(arr2.pop())
        arr2.unshift(arr1.pop())
    });
}

// My tests
console.log("--------- My tests ----------");
let arr1 = [10,20,30,40,50]
let arr2 = [100,200,300,400,500]
exchangeArrays(arr1, arr2)
console.log('Arr 1: ', arr1)
console.log('Arr 2: ', arr2)

// Answer tests
console.log("--------- Answer tests ----------");
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
exchangeArrays(arr1, arr2)
console.log('Arr 1: ', arr1)
console.log('Arr 2: ', arr2)

// Answer
/*
function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)
*/
