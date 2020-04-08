
function Pessoa(idade = 0) {
    this.idade = idade;
    console.log('local = ',this)
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
console.log('global = ',this)

const pessoa1 = new Pessoa(10)
const pessoa2 = new Pessoa