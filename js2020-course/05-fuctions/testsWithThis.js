//'use strict';
const obj1 = {
    textoFuncao1: "Funcao 1 do obj1",
    textoArrow1: "Arrow 1 do obj1",
    textoArrow2: "Arrow 2 do obj1",
    funcao1: function() {
        return this.textoFuncao1
    },
    arrow1: () => this.textoArrow1,
    obj2: {
        textoFuncao2: "Funcao 2 do obj2",
        textoArrow2: "Arrow 2 do obj2",
        funcao2() {
            return this.textoFuncao2
        },
        arrow2: () => this.textoArrow2
    },
    obj3: {
        textoArrow3: "Arrow 3 em obj3",
        funcao3(){
            arrow3 = () => {                
                return this.textoArrow3 
            }
            return arrow3
        }        
    }
}

console.log('1.) ',obj1.funcao1()) // Funcao 1 do obj1
console.log('2.) ',obj1.arrow1())  // undefined
console.log('3.) ',obj1.obj2.funcao2()) // Funcao 2 do obj2
console.log('4.) ',obj1.obj2.arrow2())  // undefined
console.log('5.) ',obj1.obj3.funcao3()())  // 
console.log('6.) ',obj1.obj3.funcao3.arrow3);  // 
console.log("----------------------------------------------------")

this.textoFuncao1 = "Funcao 1 do this"
this.textoArrow1 = "Arrow 1 do this"

this.textoFuncao2 = "Funcao 2 do this"
this.textoArrow2 = "Arrow 2 do this"

console.log(obj1.funcao1()) // Funcao 1 do obj1
console.log(obj1.arrow1())  // Arrow 1 do this
console.log(obj1.obj2.funcao2()) // Funcao 1 do ob1
console.log(obj1.obj2.arrow2())  // Arrow 2 1 do this