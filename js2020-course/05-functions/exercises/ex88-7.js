function calcBhaskara(a, b, c){
    let x = []

    let delta = (b ** 2) - (4 * a * c)
    if(delta < 0){
        return "Delta in negative!"
    }

    x.push( (-b + Math.sqrt(delta))/ (2 * a))
    x.push( (-b - Math.sqrt(delta))/ (2 * a))
    
    return x
}

console.log('1.) ',calcBhaskara(2, 5, 2))
console.log('1.) ',calcBhaskara(1, 3, 2))
console.log('1.) ',calcBhaskara(3, 1, 2))

// Answer
/*function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
*/