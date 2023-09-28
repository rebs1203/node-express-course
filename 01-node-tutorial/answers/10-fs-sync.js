const {readFileSync, writeFileSync} = require('fs');


writeFileSync('./temporary/fileA.txt', 
'Mas eu te procuro, eu so sei te procurar'
)

writeFileSync('./temporary/fileA.txt', 
' Me diz o que e que eu faco agora, eu ja pedi pra voce ir embora', 
{flag: 'a'}
)

writeFileSync('./temporary/fileA.txt', 
' E que eu nao consigo arrancar voce daqui', 
{flag: 'a'}
)

const procuro = readFileSync('./temporary/fileA.txt', 'utf8')

console.log(procuro);


