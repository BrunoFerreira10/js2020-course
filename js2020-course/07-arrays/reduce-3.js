// My implementation 1 // Bad one, can´t change the original array bro...
Array.prototype.reduce2 = function(callback, initialValue, thisArg = this) {
    
    if(!!initialValue){
        thisArg.unshift(initialValue)
    }  
    
    let result = thisArg[0]

     for(let i = 1; i < thisArg.length; i++){
         result = callback(result, thisArg[i], thisArg)
     }           
     return result
}

// My implementation // Forcing another alternative...
Array.prototype.reduce2 = function(callback, initialValue, thisArg = this) {
    
    let localArray = Object.create(thisArg)

    if(!!initialValue){
        localArray.unshift(initialValue)
    }  
    
    let result = localArray[0]

     for(let i = 1; i < localArray.length; i++){
         result = callback(result, localArray[i], localArray)
     }           
     return result
}

// Class implementation 1
Array.prototype.reduce3 = function(callback) {
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], this)
    }
    return acumulador
}
// Class implementation 2
Array.prototype.reduce4 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// My implementation
// Challenge 1: Are all students scholarship holders?
console.log('All students are holders: ',alunos.map(student => student.bolsista).reduce2((prev, actual) => prev && actual))

// Challenge2: Are any student scholarship holder?
console.log('Any students is holder: ',alunos.map(student => student.bolsista).reduce2((prev, actual) => prev || actual))

//Class implementation
// Challenge 1: Are all students scholarship holders?
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(student => student.bolsista).reduce(todosBolsista))

// Challenge2: Are any student scholarship holder?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(student => student.bolsista).reduce(algumBolsista))


// Class test
const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))
console.log(nums.reduce2(soma,21))
console.log(nums.reduce4(soma))
console.log(nums.reduce4(soma,21))