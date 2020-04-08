function Pessoa() {
    this.idade = 0;

    // function plusIdade() {
    //     this.idade++
    //     console.log(this.idade)
    // }
    // setInterval(plusIdade, 100)

    // setInterval(function () {
    //     this.idade++
    //     console.log(this.idade)
    // }.bind(this), 100)

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 100)
}
new Pessoa