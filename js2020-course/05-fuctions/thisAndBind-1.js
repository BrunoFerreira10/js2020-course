
const pessoa = {
    saudacao: 'Bom dia!',
    despedida: 'Fui!',
    falar(){
        console.log(this.saudacao)
    },
    fui: () => {
        console.log(this.despedida)
    }
}

console.log("------- Function an Bind ------------");
const pessoaNoturna = {
    saudacao: 'Boa noite!',
}
pessoa.falar()

let falar = pessoa.falar
falar()

saudacao = 'Boa tarde!'
falar()

falar = pessoa.falar.bind(pessoa)
falar()

falar = pessoa.falar.bind(pessoaNoturna)
falar()
console.log("------- Arrow ------------");
this.despedida = "Maaaa...."
pessoa.fui() // ??????
