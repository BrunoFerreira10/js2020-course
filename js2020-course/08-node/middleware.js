// Middleware pattern (chain of responsability)

const step1 = (context, next) => {
    context.value1 = 'mid1'
    next()
}

const step2 = (context, next) => {
    context.value2 = 'mid2'
    next()
}

const step3 = context => context.value3 = 'mid3'

const exec = (context, ...middlewares) => {
    const execStep = index => {
        middlewares && 
        index < middlewares.length && 
        middlewares[index](context, () => execStep(index + 1))
    }
    execStep(0)
}


let context = {}
exec(context, step1, step2, step3)
console.log(context)

context = {}
exec(context, step2, step3)
console.log(context)

context = {}
exec(context, step2)
console.log(context)

context = {}
exec(context)
console.log(context)