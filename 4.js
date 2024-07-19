const produto = {
    nome: 'coca',
    preco: 5,
    quantidade: 10
}

function total(a,b){
    return a*b
}

console.log(`O custo total do estoque de ${produto.nome} é: R$ ${total(produto.preco, produto.quantidade)}`)