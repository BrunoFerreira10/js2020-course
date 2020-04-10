function simpleInterestApplication(initialCapital, interestTax, months){
    return initialCapital += (initialCapital * months *  interestTax)
}

function compoundInterestApplication(initialCapital, interestTax, months) {
    for (let index = 0; index < months; index++) {
        initialCapital += (initialCapital *  interestTax)       
    }
    return initialCapital
}

console.log('1.) ', simpleInterestApplication(1000,0.1,10));
console.log('2.) ', compoundInterestApplication(1000,0.1,10));

// Answer
/*function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(1000, 10/100, 10));
console.log(jurosCompostos(1000, 10/100, 10));
*/