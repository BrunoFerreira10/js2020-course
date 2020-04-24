function gameAnalisys(pointsHistory){
    let points = pointsHistory.split(' ')
    let records = 0
    let worst = points[0]
    let best = points[0]
    let worstIndex
    points.forEach((element,i) => {
        element = element * 1;
        if(i > 0 && element > best){
            best = element
            records++
        } else if (element < worst){
            worst = element
            worstIndex = i
        }    
    })
    return[records,worstIndex+1]
}
console.log(gameAnalisys("10 20 20 8 25 3 0 30 1"));
console.log(gameAnalisys("30 40 20 4 51 25 42 38 56 0"));


// Answer
/*
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))
*/