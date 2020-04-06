{
    {
        {
            {
                var sera = "Será???"
            }
        }
    }
}
console.log(sera) // Funciona normalmente, o escopo é global

function teste(){
    var local = 123
}
teste()
//console.log(local) // Error: local is not defined

