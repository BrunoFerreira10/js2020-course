function greeting(name) {
    

    return function (res, req, next) {        
        console.log(`Be welcome ${name}.!`)
        next()
    }
}

module.exports = greeting