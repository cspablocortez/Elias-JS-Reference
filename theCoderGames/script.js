const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function problem1() {
    // We are going to make two random numbers (x and y)
    // then we will print X + Y so the user can do the problem

    const x = Math.floor(Math.random() * 100)
    const y = Math.floor(Math.random() * 100)
    
    readline.question(`${x} + ${y}\n > `, answer => {
        console.log(`Answer: ${x + y}`)
        console.log( parseInt(answer) === (x + y) ? 'CORRECT' : 'INCORRECT')
        readline.close()
    })
}

problem1()

