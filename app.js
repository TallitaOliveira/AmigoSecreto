// Array para armazenar os nomes dos amigos.
let amigos = [];

// Função para adicionar um amigo à lista.
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = "";
    atualizarListaAmigos();
}

// Atualiza a lista de amigos exibida na página.
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizá-la

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;

        // Botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remover";
        removeButton.className = "button-remove";
        removeButton.setAttribute('data-index', index); // Adiciona o índice como atributo

        removeButton.addEventListener('click', function () {
            const idx = parseInt(removeButton.getAttribute('data-index')); // Pega o índice
            removerAmigo(idx);
        });

        listItem.appendChild(removeButton);
        listaAmigos.appendChild(listItem);
    });
}

        // Função para remover um amigo da lista
        function removerAmigo(index) {
            amigos.splice(index, 1); // Remove o amigo pelo índice
            atualizarListaAmigos();
        }

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}