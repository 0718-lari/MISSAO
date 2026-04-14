let quantidade = 0;
let total = 0;
let carrinho = [];

function adicionar(nome, preco) {
    quantidade++;
    total += preco;

    carrinho.push({ nome, preco });

    atualizarTela();
}

function remover(index) {
    total -= carrinho[index].preco;
    quantidade--;

    carrinho.splice(index, 1);

    atualizarTela();
}

function atualizarTela() {
    document.getElementById("quantidade").innerText = quantidade;
    document.getElementById("total").innerText = total;

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        lista.innerHTML += `
    <div class="itemCarrinho">
        ${item.nome} - R$ ${item.preco}
        <button onclick="remover(${index})">❌</button>
    </div>
`;
    });
}