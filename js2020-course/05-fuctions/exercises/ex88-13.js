function isUtilDay(weekDay) {
    switch (weekDay) {
        case 1:
        case 7:
            return "Not util day"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Util day"
        default:
            return "Not valid day"
    }
}

// My tests
console.log("--------- My tests ----------");
for (let i = 0; i <= 8; i++) {
    console.log(i, " = ", isUtilDay(i))
}
// Answer tests
console.log("--------- Answer tests ----------");
console.log(1, " = ", isUtilDay(1))
console.log(2, " = ", isUtilDay(2))
console.log(3, " = ", isUtilDay(3))
console.log(4, " = ", isUtilDay(4))
console.log(5, " = ", isUtilDay(5))
console.log(6, " = ", isUtilDay(6))
console.log(7, " = ", isUtilDay(7))
console.log('a', " = ", isUtilDay('a'))

// Answer
/*
function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));
*/
