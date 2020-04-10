function testFruit(fruit) {
    switch (fruit) {
        case 'maça':
            console.log('We do not sell this fruit here')            
            break;

        case 'kiwi':
            console.log('We are short of kiwi');            
            break;

        case 'melancia':
            console.log('Here it is, it´s R$3.00 a kg')
            break;

        default:
            console.log('Invalid fruit')
            break;
    }
}

// My tests
console.log("--------- My tests ----------");
testFruit('maça')
testFruit('kiwi')
testFruit('melancia')
testFruit('abacate')

// Answer tests
console.log("--------- Answer tests ----------");
testFruit('maça')
testFruit('kiwi')
testFruit('melancia')
testFruit('alcatra')

// Answer
/*
function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')
*/
