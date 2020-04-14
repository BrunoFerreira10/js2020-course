const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// My solution
axios.get(url).then(response => {
    const employees = response.data
    const filterGender = gender => employee => employee.genero === gender
    const filterCountry = country => employee =>  employee.pais === country
    const getLowerSalary = (prev, actual) => actual.salario < prev.salario ? actual : prev
    
    let lowerSalaryChineseGirl = employees.filter(filterGender('F'))
    lowerSalaryChineseGirl = lowerSalaryChineseGirl.filter(filterCountry('China'))
    lowerSalaryChineseGirl = lowerSalaryChineseGirl.reduce(getLowerSalary)

    console.log(lowerSalaryChineseGirl)
})

// Class solution
const chineses = f => f.pais === 'China'
const mulheres = f =>  f.genero === 'F'
const menorSalario = (func, funcAtual) =>  func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data    
    
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})



