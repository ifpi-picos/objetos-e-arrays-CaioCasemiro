const prompt = require('prompt-sync')()

let filmes = []

for (let i = 0; i < 5; i++){
    filmes.push(prompt('Adicione um filme: '))
}

console.log('OS FILMES ADICIONADOS FORAM:')

for (let c = 0; c < filmes.length; c++){
    console.log(filmes[c])
}