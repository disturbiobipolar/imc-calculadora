function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    
 if (!peso || !altura || altura <= 0 || peso <= 0) {

        resultado.textContent = "valor inválido";
        resultado.className = "resultado";
        return;
    }

    const imc = peso / Math.pow(altura, 2);
    const classificacao = classificarIMC(imc);
    
    resultado.innerHTML = `Seu IMC: <strong>${imc.toFixed(2)}</strong><br>${classificacao.texto}`;
    resultado.className = `resultado ${classificacao.classe}`;

}

function classificarIMC(imc) {

    if (imc < 18.5) {
        return { texto: "Classificação: Abaixo do peso", classe: "abaixo" };
    } else if (imc < 24.9) {
        return { texto: "Classificação: Peso normal", classe: "normal" };
    } else if (imc < 29.9) {
        return { texto: "Classificação: Sobrepeso", classe: "sobrepeso" };
    } else if (imc < 34.9) {
        return { texto: "Classificação: Obesidade Grau I", classe: "obesidade1" };
    } else if (imc < 39.9) {
        return { texto: "Classificação: Obesidade Grau II", classe: "obesidade2" };
    } else {
        return { texto: "Classificação: Obesidade Grau III", classe: "obesidade3" };
    }
}