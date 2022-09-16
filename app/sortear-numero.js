const menorValor = 10;
const maiorValor = 1000;

const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
};

console.log('O numero secreto é:', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

