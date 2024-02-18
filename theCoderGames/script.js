const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});



((MIN=1, MAX=10) => {
    const x = Math.floor(Math.random() * MAX) + MIN
    const y = Math.floor(Math.random() * MAX) + MIN
    
    readline.question(`${x} + ${y}\n > `, answer => {
        console.log(+answer === (x + y) ? '\nCORRECT\n' : '\nINCORRECT\n')
        readline.close()
    })
})()

