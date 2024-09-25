function calcularValor() {
    const valorPor15Min = parseFloat(document.querySelector("#valor").value);
    const tempoUso = parseInt(document.querySelector("#tempo").value);
    
    const tempoCobrado = Math.ceil(tempoUso / 15); // Arredonda para cima
    const valorTotal = tempoCobrado * valorPor15Min;

    document.querySelector("#resultado").innerHTML = 
        `Valor a Pagar R$: ${valorTotal.toFixed(2)}`;
}
