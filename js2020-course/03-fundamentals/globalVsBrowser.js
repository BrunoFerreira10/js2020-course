let a = 1;
var b = 1;
this.c = 1
global.d =1
e = 1
module = {}
global = {}

console.log('01) ',this.a)
console.log('02) ',this.b)
console.log('03) ',this.e)
console.log('04) ',global.a)
console.log('05) ',global.b)
console.log('06) ',global.d)
console.log('07) ',global.e)
console.log('08) ',global.d)
console.log('09) ',global.e)
console.log('10) ',global === this)
console.log('11) ',this)
console.log('12) ',global)
console.log('13) ',module.exports)
