const pessoas = [
    {nome: 'Caio', idade: 18},
    {nome: 'Kaio', idade: 19},
    {nome: 'Chiquinho', idade: 17},
    {nome: 'Widiney', idade: 17}
]

const pessoasmaioresdeidade = pessoas.find(function(idade){
    return idade.idade >= 18
})

console.log(pessoasmaioresdeidade)