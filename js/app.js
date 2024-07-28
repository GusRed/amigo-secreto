let listaAmigosAdicionados = [];

function adicionar(){
    let inputAmigo = document.getElementById("nome-amigo");
    let listaAmigos = document.getElementById("lista-amigos");
    let nomeAmigoSemEspaçoMaiusculo = document.getElementById("nome-amigo").value.replace(/\s/g, '').toUpperCase();

    if (inputAmigo.value == "" || inputAmigo.value == " "){
        alert("Insira um nome válido para adicionar.");
        return;
    }

    if (listaAmigosAdicionados.some(nome => nome === nomeAmigoSemEspaçoMaiusculo)){
        alert("Esse nome já existe na lista!");
        return;
    } else {
        listaAmigosAdicionados.push(nomeAmigoSemEspaçoMaiusculo);

        if (listaAmigos.textContent == ""){
            listaAmigos.textContent = nomeAmigoSemEspaçoMaiusculo;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigoSemEspaçoMaiusculo;
        }
    }

    inputAmigo.value = "";

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if (listaAmigosAdicionados.length < 4){
        alert("A lista precisa ter no mínimo 4 nomes!");
        return;
    } else {
        embaralhar(listaAmigosAdicionados);
        let listaSorteio = document.getElementById("lista-sorteio");
    
        for (let i = 0; i < listaAmigosAdicionados.length; i++){
    
            if (i == listaAmigosAdicionados.length - 1){ //-1 por conta do tamanho da lista ser o tamanho da lista - 1 
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigosAdicionados[i] + " --> " + listaAmigosAdicionados[0] + "<br>";
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigosAdicionados[i] + " --> " + listaAmigosAdicionados[i + 1] + "<br>";
            }
    
        }
    }

}

function reiniciar(){

    listaAmigosAdicionados = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";

}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }

}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigosAdicionados.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');

        paragrafo.textContent = listaAmigosAdicionados[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function excluirAmigo(index) {
    listaAmigosAdicionados.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}