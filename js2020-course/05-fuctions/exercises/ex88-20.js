function printChange(change){
    let remainingChange = change
    let changeText = ''
    let notes = {
        cents:{description:'cents', total:0},
        note_1:{description:'note(s) of $1', total:0},
        note_5:{description:'note(s) of R$5', total:0},
        note_10:{description:'note(s) of R$10', total:0},
        note_50:{description:'note(s) of R$50', total:0},
        note_100:{description:'note(s) of R$100', total:0}        
    }
    while(remainingChange > 0){
        if(remainingChange >= 100){
            notes.note_100.total++
            remainingChange -= 100
        } else if (remainingChange >= 50) {
            notes.note_50.total++
            remainingChange -= 50
        } else if (remainingChange >= 10) {
            notes.note_10.total++
            remainingChange -= 10
        } else if (remainingChange >= 5) {
            notes.note_5.total++
            remainingChange -= 5
        } else if (remainingChange >= 1) {
            notes.note_1.total++
            remainingChange -= 1
        } else {
            notes.cents.total = remainingChange
            remainingChange = 0
        } 
    }
    for(let note in notes){
        if(notes[note].total){
            changeText += `${notes[note].total} ${notes[note].description}, `
        }
    }
    console.log('Change for R$' + change + ": "+changeText)
}

// My tests
console.log("--------- My tests ----------");
printChange(263.25)

// Answer tests
console.log("--------- Answer tests ----------");
printChange(153)

// Answer
/*
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));
*/
