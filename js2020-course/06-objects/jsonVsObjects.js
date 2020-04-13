const obj = {a:1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) // Invalid format
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) // Invalid format
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // Ok format. All attibutes must to be between double quotes
// console.log(JSON.parse('{"a": 1, "b":\'string\', "c": true, "d": {}, "e":[]}')) // Invalid format
console.log(JSON.parse('{"a": 1.7, "b":"string", "c": true, "d": {}, "e":[]}')) // Ok format. Strings need double quotes too
