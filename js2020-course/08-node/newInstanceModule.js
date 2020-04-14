// A factory return a new object
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}