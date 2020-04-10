const createNote = _ => Math.round(Math.random() * 10)

function Student(code, note1, note2, note3){
    let weightedNote1 = note1 * 0.3
    let weightedNote2 = note2 * 0.3
    let weightedNote3 = note3 * 0.3
    let average
    this.status

    this.printStudentResults = function(){
        if((note1 >= note2)&&(note1 >= note3)){
            weightedNote1 = note1 * 0.4
        } else if((note2 >= note1)&&(note2 >= note3)){
            weightedNote2 = note2 * 0.4
        } else {
            weightedNote3 = note3 * 0.4
        }
        average = (weightedNote1 + weightedNote2 + weightedNote3)
        if(average >= 5){
            this.status = 'Approved'
        } else {
            this.status = 'Disapproved'
        }
        console.log(`Student code ${code}: Notes[${note1},${note2},${note3}], Average[${average.toFixed(2)}] = ${this.status}`) 
    }    
}

// My tests
console.log("--------- My tests .... ----------");
let s1 
let status;
let code = 1

do {
    s1 = new Student(code,createNote(),createNote(),createNote())
    s1.printStudentResults()
    status = s1.status
    code++
} while (status === 'Approved')

// Answer tests
console.log("--------- Answer tests ----------");
s1 = new Student(123,2.8,6,3.5)
s1.printStudentResults()

// Answer
/*
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
*/
