// Does not accept repetition and not indexed

const teams = new Set()
teams.add('Vasco')
teams.add('São Paulo').add('Palmeiras').add('Santos')
teams.add('Flamengo')
teams.add('Vasco')

console.log(teams)
console.log(teams.size)
console.log(teams.has('Vasco'))
teams.delete('Flamengo')

const names = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const namesSet = new Set(names)
console.log(namesSet)