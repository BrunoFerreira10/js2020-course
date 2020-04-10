function arithmeticProgression(terms, n1, ratio, arr){
    arr.push(n1 + (terms * ratio))
    
    if(terms == 0){
        return n1
    } else {
        return arithmeticProgression(terms - 1, n1, ratio, arr)
    }        
}

function geometricProgression(terms, n1, ratio, arr){
    arr.push(n1 * ratio ** (terms - 1))
    
    if(terms == 1){
        return n1
    } else {
        return geometricProgression(terms - 1, n1, ratio, arr)
    }        
}

// My tests
console.log("--------- My tests ----------");
let termsArray = []

arithmeticProgression(5,1,3,termsArray)
termsArray.reverse()
console.log(termsArray)

termsArray = []
geometricProgression(10,2,3,termsArray)
termsArray.reverse()
console.log(termsArray)


// Answer tests
console.log("--------- Answer tests ----------");

// Answer
/*
*/
