let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("O campo não pode estar vazio. Digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const nomes = document.querySelectorAll("ul li");
    
    if (nomes.length < 3) {
        alert("O sorteio precisa de pelo menos 3 participantes.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado].textContent;

    document.querySelector(".result-list").innerHTML = `O amigo secreto é: <strong>${nomeSorteado}</strong>`;
}
