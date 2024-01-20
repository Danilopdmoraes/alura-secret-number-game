let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    
        
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {// includes: "já existe esse número??"
        return gerarNumeroAleatorio(); // RECURSIVA. a função roda a própria função.

    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // coloca o número no final da lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido; // por fim, traz o número escolhido.
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



/* // ex.1
function olaMundo(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
olaMundo('h1', 'Olá Mundo!');
 */

/* // ex.2
// let nome = prompt('Digite seu nome: ');

function verificarChute() {
    let nome = document.querySelector('input').value;
    console.log(`Olá, ${nome}`);
} */


/* // ex.3
function verificarChute() {
    let numero = document.querySelector('input').value;
    numero = numero * 2;
    console.log(numero);
} */

/* // ex.3 novo
function verificarChute(numero) {
    return numero * 2;
}

let dobro = verificarChute(7);
console.log(dobro);
 */

/* // ex.4
function mediaDeTres(um, dois, tres) {
    return (um + dois + tres) / 3;
}

let media = mediaDeTres(1, 2, 3);
console.log(media);
 */


/* // ex.5
function maiorDeles(primeiro, segundo) {
    if (primeiro > segundo) {
        return primeiro;
    } else {
        return segundo;
    }
}

//let maior = maiorDeles(14, 12);
console.log(maiorDeles(7, 12));
 */

/* // ex.6
function porEleMesmo(umNumero) {
    return umNumero * umNumero;
}
let multiplicar = porEleMesmo(3);
console.log(multiplicar); */
