// Without promises
const http = require('http')

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = ''
        res.on('data', data => {
            result += data
        })
        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = []
getClass('A', students => {
    names = names.concat(students.map(student => `A: ${student.nome}`))    
    getClass('B', students => {
        names = names.concat(students.map(student => `B: ${student.nome}`))    
        getClass('C', students => {
            names = names.concat(students.map(student => `C: ${student.nome}`))    
            console.log(names)
        })        
    })    
})

