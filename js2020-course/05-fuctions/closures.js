// Closure é o escopo criado qundo uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    const dentro = () => {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
