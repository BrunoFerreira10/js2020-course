// Função em JS é First-Class Object (Citizen)
// Higher-order function

// Criar função de forma literal
function fun1() { 
    console.log("FUN 1");
    
}

// Armazenar em uma váriavel
const fun2 = function () { 
    console.log("FUN 2");
    return "F2 COMPLETE"
}

// Armazenar em um array
const array = [function (a , b) { return a + b}, fun1, fun2()]

console.log('Start')
console.log(array[0](1,1));
array[1]()
console.log(array[2])
console.log('end')

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return "Eu falo!"}
obj.falou = function() { return "Eu já falei!"}()
console.log(obj.falar())
console.log(obj.falou);

// Passar função como parametro
function run(fun){
    console.log("Eu que executo:")    
    fun()
}

run(fun1)
run(function () {console.log("Executando...")})

// Uma funçao pode retornar/conter uma função
function soma(a, b){
    return function(c = 0) {
        return a + b + c
    }
}

console.log(soma(1,2)(3))
const tresMais = soma(1,2)
console.log(tresMais())
console.log(tresMais(7))



