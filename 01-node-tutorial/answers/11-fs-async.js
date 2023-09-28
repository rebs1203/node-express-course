const { writeFile } = require('fs');

console.log("at start")

writeFile('./temporary/fileB.txt', 'Que a gente inventou que o mundo era pra dois',
(err, result) => {
    console.log('at point 1')
    if (err) {
        console.log(err)
        return;
    } else {
        writeFile('./temporary/fileB.txt', ' as palavras que sao tao intimas de voce', {flag: 'a'},
        (err, result) => {
            console.log('at point 2')
            if (err) {
                console.log(err)
                return;
            }
        })
    }
})

console.log("at end");