function selectCar(car) {
    switch (car) {
        case 'hatch':
            console.log('Purchase successful')
            break;

        case 'sedan':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Are you sure you don´t prefe this model')
            break;

        default:
            console.log('We don´t work with this type of car here')
            break;
    }
}

// My tests
console.log("--------- My tests ----------");
selectCar('hatch')
selectCar('sedan')
selectCar('motocicletas')
selectCar('caminhonetes')
selectCar('carroça')

// Answer tests
console.log("--------- Answer tests ----------");
selectCar('hatch')
selectCar('sedan')
selectCar('motocicletas')
selectCar('caminhonetes')
selectCar('jetski')

// Answer
/*
function escolherCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));
*/
