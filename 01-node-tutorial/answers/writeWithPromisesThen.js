const { writeFile, readFile} = require('fs').promises;

let lineData = '';

for (let i = 0; i < 3; i++) {
    lineData += ` Line ${i}`
}

writeFile('./temporary/temp.txt', lineData, {flag: 'a'})
.then(() => {
    return readFile('./temporary/temp.txt', 'utf8')
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

