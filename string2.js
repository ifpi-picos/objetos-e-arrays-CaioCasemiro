const prompt = require('prompt-sync')()

let nome = prompt('Digit seu nome completo: ')

let nomes = nome.split(' ')

console.log(`O seu primeiro nome é: ${nomes[0]}\nO seu último nome é: ${nomes.at(-1)}`)
