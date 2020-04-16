// With promises
const http = require('http')

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
            res.on('data', data => {
                result += data
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))    
                } catch (error) {
                    reject(error)
                }                
            })
        })
    })

}

/*let names = []
 getClass('A').then(students => {
    names = names.concat(students.map(student => `A: ${student.nome}`))
    getClass('B').then(students => {
        names = names.concat(students.map(student => `B: ${student.nome}`))
        getClass('C').then(students => {
            names = names.concat(students.map(student => `C: ${student.nome}`))
            console.log(names)
        })
    })
}) */

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(classes => [].concat(...classes))
    .then(students => students.map(student => student.nome))
    .then(name => console.log(name))
    .catch(error => console.log(error)) 
    
getClass('D').catch(error => console.log(error))     

