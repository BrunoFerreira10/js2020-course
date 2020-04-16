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

// ES8 Resource
// Objective to simplify the use of Promises
let getStudents = async () => {
    const classA = await getClass('A')
    const classB = await getClass('B')
    const classC = await getClass('C')
    return [].concat(classA, classB, classC)
} // Returns an AsyncFunction object

getStudents()
    .then(students => students.map(student => student.nome))
    .then(names => names.forEach((name, index) => console.log(`${index+1}.) Hello ${name}`)))