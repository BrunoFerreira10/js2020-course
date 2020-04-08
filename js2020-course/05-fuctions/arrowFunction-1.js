let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // Return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => ( _ || 'Olá') // Possui um parameto

console.log(ola("Sai fora"))