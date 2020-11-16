const bolas = document.getElementsByClassName ('ball');
const textoCor = document.getElementById ('rgb-color');
const textoResposta = document.getElementById ('answer');;
const botaoReiniciar = document.getElementById ('reset-game');
const botaoApagarPontos = document.getElementById ('reset-score');
const pontuacao = document.getElementById ('score');
const placar = localStorage.getItem ('Pontos');

let pontos = 0;

const cores = [];

if (placar) {
    pontos = parseInt (placar);
}

function numeroAleatorio (mul) {
    
    const numero = Math.floor (Math.random () * mul);
    return numero;
}

function corAleatoria () {
    
    const rgb = `rgb(${numeroAleatorio (256)}, ${numeroAleatorio (256)}, ${numeroAleatorio (256)})`;
    return rgb;
}

function cliqueNaBola (event) {

    const corSelecionada = event.target.style.backgroundColor;

    if (corSelecionada === textoCor.textContent) {
        textoResposta.textContent = "Acertou!";
        //Código para guardar o score é adicionado aqui
        pontos += 3;
        pontuacao.textContent = pontos + " Pontos";

        localStorage.setItem ('Pontos', pontos);

    } else {
        textoResposta.textContent = "Errou! Tente novamente.";
    }
}

for (let bola = 0; bola < bolas.length; bola += 1) {

    const cor = corAleatoria ();
    bolas [bola].style.backgroundColor = cor;
    cores [bola] = cor;
    bolas [bola].addEventListener ('click', cliqueNaBola);
}

function adicionaCorAleatoria () {

    textoCor.textContent = cores [numeroAleatorio (6)];
}

adicionaCorAleatoria ();

function limparPontuacao () {

    localStorage.clear ();
    pontuacao.textContent = 0 + " Pontos";
}

function reiniciaJogo () {

    window.location.reload ();
}

botaoReiniciar.addEventListener ('click', reiniciaJogo);
botaoApagarPontos.addEventListener ('click', limparPontuacao);
