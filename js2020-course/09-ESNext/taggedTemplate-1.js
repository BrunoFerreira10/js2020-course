// Tagged template - process a template in a function
function tag(parts, ...values){
    console.log(parts)
    console.log(values)
    return 'Another string'
}

const student = 'Gui'
const status = 'Approved'
console.log(`${student} is ${status}`)
console.log(tag `${student} is ${status}.`)