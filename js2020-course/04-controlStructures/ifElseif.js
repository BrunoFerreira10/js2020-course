Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

console.log((50).entre(0,100));
console.log((50).entre(0,25));
