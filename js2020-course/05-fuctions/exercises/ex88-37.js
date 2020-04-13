function arithmeticProgression(terms, n1, ratio, arr = []){
    
    arr.unshift(n1 + (terms - 1) * ratio)
  
    if(terms == 1){
        return n1
    } else {
        arithmeticProgression(terms - 1, n1, ratio, arr)
        if(terms == arr.length){
            let sum = (terms/2) * (n1 + (n1 + ((terms+1) * ratio)))
            console.log(`PA(${terms},${n1},${ratio}): ${arr}. SUM = ${sum}`)                              
        }    
        return arr
    }        
}

function geometricProgression(terms, n1, ratio, arr = []){
    arr.unshift(n1 * (ratio ** (terms - 1)))    
    if(terms == 1){
        return n1
    } else {        
        geometricProgression(terms - 1, n1, ratio, arr)
        if(terms == arr.length){
            let sum = (n1*(1-ratio ** terms)) / (1 - ratio)
            console.log(`PG(${terms},${n1},${ratio}): ${arr}. SUM = ${sum}`)                  
        } 
        return arr
    }        
}

// My tests
console.log("--------- My tests ----------");
arithmeticProgression(5,1,2)
geometricProgression(5,1,2)

// Answer tests
console.log("--------- Answer tests ----------");

// Answer
/*
*/
