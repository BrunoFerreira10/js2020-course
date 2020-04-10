function Aluno(name, note){
    
    this.toEvaluateNote = function (){
        if(note >= 38){
            while(Math.floor(note) % 5 != 0)
                note = Math.floor(note) + 1
            return `${name} Approved. Note: ${note}`
        } else {
            return `${name} Disapproved. Note: ${note}`
        }
    }
}

console.log(new Aluno('Bruno', 41).toEvaluateNote())
console.log(new Aluno('Erica', 41.5).toEvaluateNote())
console.log(new Aluno('Bob', 38).toEvaluateNote())
console.log(new Aluno('Fabio', 37.99).toEvaluateNote())
console.log(new Aluno('Felipe', 37).toEvaluateNote())
console.log(new Aluno('Maria', 100).toEvaluateNote())

// Answer
/*function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
*/