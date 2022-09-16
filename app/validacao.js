function verificaChute(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido</div>`
        return
    }

    if(numeroInvalido(numero)) {
        elementoChute.innerHTML += `<div>Numero Inválido: O numero precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="reset" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        ` 
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        ` 
    }
};

function chuteInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor;
};

document.body.addEventListener('click', e => {
    if(e.target.id == 'reset') {
        window.location.reload()
    }
});