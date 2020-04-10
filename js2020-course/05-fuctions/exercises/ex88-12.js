function calculateFatorial(number){
    let fatorial = 1
    for (let i = 1; i <= number; i++) {
        fatorial *= i
    }
    return fatorial
}

// My tests
for (let i = 0; i <= 10; i++) {
    console.log(i,': ',calculateFatorial(i));    
} 
// Answer tests
console.log(10,': ',calculateFatorial(10));    

// Answer
/*function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
*/
