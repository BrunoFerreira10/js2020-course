for (const letter of 'Cod3r'){
    console.log(letter)
}

const ecmaIssues  = ['Map','Set','Promise']

for (const i of ecmaIssues) {
    console.log(i)
}

for (const i in ecmaIssues) {
    console.log(i)
}

const issuesMap = new Map([
    ['Map', {addressed: true}],
    ['Set', {addressed: true}],
    ['Promise', {addressed: false}]
])

for (const issue of issuesMap) {
    console.log('a.)',issue)
}

for (const issue of issuesMap.keys()) {
    console.log('b.)',issue)
}

for (const issue of issuesMap.values()) {
    console.log('c.)',issue)
}

for (const [k,v] of issuesMap.entries()) {
    console.log('d.)',k,v)
}

const s = new Set(['a','b','c'])
for (const letter of s){
    console.log('e.)',letter)
}