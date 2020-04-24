function checkCharacters(string1 = '', string2 = ''){
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    for(let i = 0; i < string1.length; i++){
        if(string2.search(string1[i]) < 0)
            return false
    }
    for(let i = 0; i < string2.length; i++){
        if(string1.search(string2[i]) < 0)
            return false
    }
    return true
}


// My tests
console.log("--------- My tests ----------");
console.log('1.) ',checkCharacters("ABC","ABC"))
console.log('2.) ',checkCharacters("abc","ABC"))
console.log('3.) ',checkCharacters("cba","ABC"))
console.log('4.) ',checkCharacters("cbax","ABC"))
console.log('5.) ',checkCharacters("ABC","yba"))
console.log('6.) ',checkCharacters("ABC","A"))
console.log('7.) ',checkCharacters("A","b"))


// Answer tests
console.log("--------- Answer tests ----------");
console.log("...... no...");

// Answer
/*function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))
 console.log(verificacaoDeString('abc','cbax'))
 console.log(verificacaoDeString('abcx','cba'))
 console.log(verificacaoDeString('a','cba'))
 console.log(verificacaoDeString('acb','a'))
*/
