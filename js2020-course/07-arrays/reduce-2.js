const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// My implementation
// Challenge 1: Are all students scholarship holders?
console.log('All students are holders: ',alunos.map(student => student.bolsista).reduce((prev, actual) => prev && actual))

// Challenge2: Are any student scholarship holder?
console.log('Any students is holder: ',alunos.map(student => student.bolsista).reduce((prev, actual) => prev || actual))

//Class implementation
// Challenge 1: Are all students scholarship holders?
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(student => student.bolsista).reduce(todosBolsista))

// Challenge2: Are any student scholarship holder?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(student => student.bolsista).reduce(algumBolsista))
