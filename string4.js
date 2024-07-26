const prompt = require('prompt-sync')()

let frase = prompt('Escreva uma frase: ')

console.log(`Sua frase em maiusculo fica:\n${frase.toUpperCase()}`)