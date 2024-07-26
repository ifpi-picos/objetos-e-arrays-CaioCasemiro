const prompt = require('prompt-sync')()

let nome = prompt('Escreva seu nome completo: ')

let nomes = nome.split(' ')

console.log(`O seu primeiro nome é: ${nomes[0]}`)