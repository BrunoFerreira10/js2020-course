console.log('1.) ',this === global)
console.log('2.) ',this === module)
console.log('3.) ',this === module.exports)
console.log('4.) ',this === exports)

function logThis(){
    console.log('5.) ',this === module.exports)
    console.log('6.) ',this === exports)
    console.log('6.) ',this === global)
    
    this.danger = "Caution!!!!" // Function attr in global object
}
logThis()