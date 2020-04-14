const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const employees = response.data
    const filterGender = gender => employee => employee.genero === gender
    const filterCountry = country => employee =>  employee.pais === country
    const getLowerSalary = (prev, actual) => actual.salario < prev.salario ? actual : prev
    
    let youngChineseGirl = employees.filter(filterGender('F'))
    youngChineseGirl = youngChineseGirl.filter(filterCountry('China'))
    youngChineseGirl = youngChineseGirl.reduce(getLowerSalary)

    console.log(lowerSalaryChineseGirl)
})




