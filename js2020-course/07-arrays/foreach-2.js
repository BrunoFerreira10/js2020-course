// My implementation
Array.prototype.forEach2 = function (f, t = this){
    for(let i = 0; i < t.length; i++){
        f(t[i], i, t)
    }
}

// Class implementation
Array.prototype.forEach2 = function (callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

