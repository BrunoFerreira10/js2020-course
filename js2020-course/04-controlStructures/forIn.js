const notas = [6.7, 7.4,9.8, 8.1, 7.7]

for (let i in notas){
    console.log(notas[i]);    
}

const obj = {
    nome: 'Bruno',
    idade: 34,
    endereço:'Estrada do Barreiro'
}
for (let i in obj){
    console.log(i);    
}
for (let i in obj){
    console.log(`${i} = ${obj[i]}`);    
}
