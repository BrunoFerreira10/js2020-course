function calculator(a,op,b){

    switch(op){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:        
            return 'Invalid operation'
    }
}

// My tests
console.log("--------- My tests ----------");
console.log(calculator(10,'+',20))
console.log(calculator(10,'-',20))
console.log(calculator(10,'*',20))
console.log(calculator(10,'/',20))
console.log(calculator(10,'%',20))


// Answer tests
console.log("--------- Answer tests ----------");
console.log(calculator(2,'+',3))
console.log(calculator(2,'-',3))
console.log(calculator(2,'*',3))
console.log(calculator(2,'/',3))
console.log(calculator(2,'a',3))

// Answer
/*function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));
*/
