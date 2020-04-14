console.log('1.) ',module.exports === this)
console.log('2.) ',module.exports === exports)

this.a  = 1
exports.b = 2
module.exports.c = 3

console.log('3.) ',module.exports === this)
console.log('4.) ',module.exports === exports)

exports = null
console.log('5.) ',exports)
console.log('6.) ',module.exports === this)
console.log('7.) ',module.exports === exports)

module.exports = {
    x: "a"
} 

console.log('8.) ',module.exports === this)
console.log('9.) ',module.exports === exports)