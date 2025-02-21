let nomes = [];


function adicionarAmigo() {
    let adicionar = document.querySelector("input").value;
    if(adicionar === "") {
        alert("Digite um nome válido")
        return
    }

    if (nomes.includes(adicionar)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    nomes.push(adicionar);
    document.querySelector("input").value = ""; // Limpa o campo
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let indiceSorteado = Math.floor(Math.random() * nomes.length);
    let resultado = nomes[indiceSorteado];

    document.getElementById("resultado").innerHTML = `<li>${resultado}</li>`;
    nomes = [];
    atualizarLista();
}