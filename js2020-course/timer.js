const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 14 * * 3',() => {
    console.log('Running task 1!', new Date().toString())
})

setTimeout( function() {
    task1.cancel()
    console.log('Cancelling task 1')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 14
rule.second = 30

const task2 = schedule.scheduleJob(rule,() => {
    console.log('Running task 2!', new Date().toString())
})