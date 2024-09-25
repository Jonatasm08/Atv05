function calcularPromocaoSupermercado() {
    const produto = document.querySelector("#produto").value;
    const preco = parseFloat(document.querySelector("#preco").value);

    const precoComDesconto = (preco * 2) + (preco / 2);

    document.querySelector("#resultado").innerHTML = 
        `Promoção de ${produto}: Leve 3 por apenas R$ ${precoComDesconto.toFixed(2)} (50% de desconto no 3º item)`;
}
