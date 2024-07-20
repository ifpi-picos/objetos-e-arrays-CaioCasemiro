const prompt = require('prompt-sync')()

let filmes = []

for (let i = 0; i < 5; i++){
    filmes.push(prompt('Adicione um filme: '))
}

console.log(`Filmes adicionados: ${filmes}`)