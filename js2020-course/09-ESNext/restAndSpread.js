// Operator ... rest(join)/spread(unjoin)
// Use rest as function parameter

// Use spread in objects
const employee = {name: 'Maria', salary: 12348.99}
const clone = {active: true, ...employee}
console.log(employee, clone)

// Use spread in array
const groupA = ['João', 'Pedro','Gloria']
const groupFinal = ['Maria', ...groupA, 'Rafaela']
console.log(groupFinal)
