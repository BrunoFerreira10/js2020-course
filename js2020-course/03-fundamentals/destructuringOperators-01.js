// No recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade);
console.log(pessoa);

const {nome: n, idade:i} = pessoa
console.log(n, i);
console.log(pessoa);

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

const {endereco : e, endereco: {logradouro:l , numero: nm, cep: c}} = pessoa
console.log(e, l ,nm ,c);

