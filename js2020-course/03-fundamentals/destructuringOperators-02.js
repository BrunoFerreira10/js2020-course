const [a] = [10]
console.log(a)

const [b , , c, ,d ,e = 0] = [10, 7, 9, 8]
console.log(b,c,d,e);

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota);