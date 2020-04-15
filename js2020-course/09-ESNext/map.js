const technologies = new Map()
technologies.set('react', {framework: false})
technologies.set('angular', {framework: true})
technologies.set(8, {framework: true})

console.log(technologies.get('react'))
console.log(technologies.get('react').framework)
console.log(technologies.get(7+1).framework)

const variableKeys = new Map([
    [function(){}(),'Função'],
    [function(){},'Função'],
    [{},'Objeto'],
    [123,'Número1'],
    [123,'Número2']
])

variableKeys.forEach((value, key) => {
    console.log(key, value)
})
console.log(variableKeys.get(Function)) // how to??
console.log(variableKeys.get({})) // how to??
console.log(variableKeys.get(123)) 
console.log(variableKeys.get(undefined)) 

console.log(variableKeys.has(123))
variableKeys.delete(123)
console.log(variableKeys.has(123))
console.log(variableKeys.size)

