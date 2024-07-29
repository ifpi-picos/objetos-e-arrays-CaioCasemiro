const prompt = require('prompt-sync')()

let listadecompra = []

function adicionaritem(item){
    listadecompra.push(item)
    return console.log('Item adicionado!')
}

function removeritem(item){
    let index = listadecompra.indexOf(item)

    if (index > -1){
        listadecompra.splice(index, 1)
        return console.log('O item foi removido da lista!')
    } else{
        console.log(`Verifique a ortografia, pois o item ${item} não foi encontrado na lista!`)
    }
}

function pesquisar(item){
    if (listadecompra.includes(item)==true){
        return console.log(`O item ${item} está presente na lista de compra!`)
    } else{
        return console.log(`Verifique se você escreveu certo, pois o item ${item} não está presente na lista!`)
    }
}

function ordenarlista(){
    listadecompra.sort()
    return console.log('Lista ordenada!')
}

function exibirlista(){
    console.log('A os itens da lista de compa são: ')
    for (const elemento of listadecompra){
        console.log(elemento)
    }
}

function limparlista(){
    listadecompra.splice(0, listadecompra.length)
    return console.log('Lista limpa!')
}


function programa(){
    let escolha

    do{
        console.log('\n=== Lista de compras ===\n1. Adicionar item\n2. Remover item\n3. Pesquisar item\n4. Ordenar lista\n5. Exibir lista\n6. Limpar lista\n7. Encerrar programa')

        escolha = prompt('Escolha uma opção: ')

        switch(escolha){
            
            case '1':
                let itemadc = prompt('Qual item você quer adicionar? ')
                itemadc.toUpperCase()
                adicionaritem(itemadc)
                break;
            
            case '2':
                let itemrem = prompt('Qual item você quer remover? ')
                removeritem(itemrem)
                break;
            
            case '3':
                let pesq = prompt('Qual item você procura? ')
                pesquisar(pesq)
                break;

            case '4':
                ordenarlista()
                break;

            case '5':
                exibirlista()
                break;

            case '6':
                limparlista()
                break;

            case '7': 
            console.log('PROGRAMA ENCERRADO!')
            break;

            default:
                console.log('Opção inválida, escolha uma opção válida')
        } 
    } while (escolha !== '7')
}

programa()