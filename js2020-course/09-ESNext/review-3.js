// ES8: Object.values and Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Improvements in literal notation
const name = 'Carla'
const person = {
    name,
    hello(){
        return 'Hello people!'
    }
}
console.log(person.name, person.hello())

// Class
class Animal {}
class Dog extends Animal{
    talk() {
        return 'Au au'
    }
}
console.log(new Dog().talk())
