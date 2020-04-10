function getTriangleType(a,b,c){

    if((a <= 0) || (b <= 0) || (c <= 0)) {
        return 'This is not a triangle!'
    } 

    if((a >= b + c) || (b >= a + c) || (c >= a + b)) {
        return 'This is not a triangle!'
    }   
     
     if((a == b) && (b == c)){
         return 'Triangulo Equilátero'
     } else if ((a == b) || (b == c) || (a == c)) {
         return 'Triangulo Isósceles'
     } else {
         return 'Triangulo Escaleno'
     }     
}

console.log('1.) ',getTriangleType(10,10,10))
console.log('2.) ',getTriangleType(10,10,15))
console.log('3.) ',getTriangleType(10,15,12))
console.log('4.) ',getTriangleType(10,15,25))
console.log('5.) ',getTriangleType(10,10,20))
console.log('6.) ',getTriangleType(0,10,20))
