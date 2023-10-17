const { createReadStream } = require('fs');

const readStream = createReadStream('./content/big.txt', { encoding: 'utf8', highWaterMark: 200});

let counter = 0;

readStream.on('data', (chunk) => {
    counter++
    console.log(`received data chunk: ${chunk}`)
})

readStream.on('end', () => {
    console.log(`Number of chunks received: ${counter}`)
})

readStream.on('error', (error) => {
    console.log(error)
})