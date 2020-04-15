const anonymous = process.argv.indexOf('-a') !== -1

if (anonymous){
    process.stdout.write('Hello anonymous!!\n')
    process.exit()
} else {
    process.stdout.write('Type your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\r\n','')
        process.stdout.write(`Hello ${name} !!\n`)
        process.exit()
    })
}

