// Arrow function
const sum = (a,b) => a + b
console.log(sum(1,2))

// Arrow function (this)
const lexicon1 = () => console.log(this === exports)
const lexicon2 = lexicon1.bind({})
console.log(lexicon1())
console.log(lexicon2())

// Default parameters
function log(texto = 'Node'){
    console.log(texto)
}
log()
log("ES6")
log(null)

// Rest operator
function total(...numbers){
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5,6))