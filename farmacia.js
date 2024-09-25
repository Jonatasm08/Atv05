function calcularPromocao() {
    const medicamento = document.querySelector("#medicamento").value;
    const preco = parseFloat(document.querySelector("#preco").value);
    const precoPromocional = Math.floor(preco * 2); // Remove os centavos

    document.querySelector("#resultado").innerHTML = 
        `Promoção de ${medicamento}: Leve 2 por apenas R$ ${precoPromocional.toFixed(2)}`;
}
