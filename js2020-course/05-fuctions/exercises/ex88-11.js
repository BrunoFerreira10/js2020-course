// Reduced purposefully to test
const isBissextileYear = (year) => 
    console.log(year,": ",(year > 0)&&(!(year % 4) && (!(!(year % 100) && (year % 400)))))


console.log('---------- My tests ----------');
isBissextileYear(8)
isBissextileYear(13)
isBissextileYear(100)
isBissextileYear(200)
isBissextileYear(700)
isBissextileYear(800)
isBissextileYear(1200)
console.log('---------- Answer tests ----------');
isBissextileYear(0)
isBissextileYear(4)
isBissextileYear(100)
isBissextileYear(400)
isBissextileYear(800)
isBissextileYear(2020)
isBissextileYear(2021)


// Answer
/*function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))
*/