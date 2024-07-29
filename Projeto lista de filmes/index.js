const prompt = require('prompt-sync')() 

let listadefilmes = []
let filmesassisidos = []

function adicionarfilme (){
    let titulo = prompt('Titulo do filme: ')
    let ano = parseInt(prompt('Ano de lançamento: '))
    let filmeparalista = {titulo: titulo, anodelançamento: ano}
    listadefilmes.push(filmeparalista)
    console.log('Filme adicionado na lista!')
}

function ordenarPorTitulo() {
    listadefilmes.sort((a, b) => a.titulo.localeCompare(b.titulo));
    return console.log("Lista ordenada por título!");
}

function ordenarPorAno() {
    listadefilmes.sort((a, b) => a.anodelançamento - b.anodelançamento);
    return console.log("Lista ordenada por ano!");
}

function pesquisarfilme (filme){
    let presente = false
    for(let i = 0; i < listadefilmes.length; i++){
        if (listadefilmes[i].titulo.includes(filme)){
            presente = true
            break
        }
    }
    if (presente){
        return console.log(`Há um filme presente na lista com o nome ${filme}!`)
    }
    else{
        return console.log(`Verifique a ortografia pois não há nenhum filme com o nome ${filme} na lista!`)
    }
}

function exibirfilmes(){
    if (listadefilmes.length > 0 ){
        console.log('Os filmes presentes na lista são:')
    for (const elemento of listadefilmes){
        console.log(elemento)
        }
    } else{
        console.log('Não há filmes na lista para assistir!')
    }
}

function exibirfilmesassistidos (){
    if (filmesassisidos.length > 0){
        console.log('Os filmes que já foram assistidos são:')
        for (const filmes of filmesassisidos){
            console.log(filmes)
        }
    }
    else{
        console.log('Não há filmes marcados como assistidos!')
    }
}

function marcarcomoassistido(filme){
    let encontrado = false
    for (let i = 0; i < listadefilmes.length; i++){
        if (listadefilmes[i].titulo === filme){
            let filmeassitido = listadefilmes.splice(i,1)[0]
            filmesassisidos.push(filmeassitido)
            console.log('Filme marcado como assistido!')
            encontrado = true
            break;
        }
        
        } if(!encontrado){
            console.log('Verfique a ortografia pois o filme não foi encontrado na lista!')
    }
}

function removerfilme(filme){
    let encontrado = false
    for (let i = 0; i < listadefilmes.length; i++){
        if (listadefilmes[i].titulo === filme){
            listadefilmes.splice(i,1)
            return console.log('Filme removido!')
            encontrado = true
            break;
        } 
    
    } if (!encontrado) {
            return console.log('Verifique a ortografia pois o filme não foi encontrado na lista!')
        }
    }
function programa(){
    let escolha

    do{
        console.log('\n=== Lista de filmes ===\n1. Adicionar filme\n2. Ordenar lista\n3. Pesquisar filme\n4. Exibir lista\n5. Marcar como assistido\n6. Remover filme\n7. Encerrar programa')

        escolha = prompt('Qual sua escolha? ')

        switch(escolha){

            case '1':
            adicionarfilme()
            break;

            case '2':
                let opcao = parseInt(prompt('1. Titulo\n2. Ano de lançamento\nComo você quer ordenar? '))
                if (opcao == 1){
                    ordenarPorTitulo()
                }
                else if(opcao == 2){
                    ordenarPorAno()
                } else{
                    console.log('Opção inválida!')
                }
                break;
            
            case '3':
                let filmeescolhido = prompt('Digite o filme que você está procurando: ')
                pesquisarfilme(filmeescolhido)
                break;
            
            case '4':
                let opc = parseInt(prompt('1. Filmes para assistir\n2. Filmes assistidos\nQual lista você quer ver? '))
                if (opc == 1){
                    exibirfilmes()
                }
                else if(opc == 2){
                    exibirfilmesassistidos()
                } else{
                    console.log('Opção inválida!')
                }
                break;

            case '5':
                let assistido = prompt('Qual filme você quer marcar como assistido? ')
                marcarcomoassistido(assistido)
                break;

            case '6':
                let remo = prompt('Qual filme você quer remover? ')
                removerfilme(remo)
                break;
            
            case '7':
                console.log('PROGRAMA ENCERRADO!')
                break;

            default:
                console.log('Opção inválida!')      
        }
    } while(escolha !== '7')
}

programa()