const { writeFile, readFile } = require("fs").promises;

let lineData = '';

for (let i = 0; i < 3; i++) {
    lineData += ` Line ${i}`
}

const writer = async () => {
    try {
        await writeFile('./temporary/temp.txt', lineData, {flag: 'a'})
    } catch (error) {
        console.log(error)
    }
}

const reader = async () => {
    try {
        const data = await readFile('./temporary/temp.txt', 'utf8')
        return data;
    } catch (error) {
        console.log(error)
    }
}

const readWrite = () => {
    writer()
        .then((result) => {
            return reader(); 
    })
    .then((data) => {
        console.log("Read data:", data);
    })
    .catch((error) => {
        console.log(error);
    });
};

readWrite();