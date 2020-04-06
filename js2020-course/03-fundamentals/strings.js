const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(10))
console.log(escola.charCodeAt(3)) //Unicode char value
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(1, 3))
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'eba'))
console.log(escola.replace(/\d/, 'e')) //Regex
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) //Regex
