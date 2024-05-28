let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1 ;

function exibirTextoNaTela(tag, Texto){
    let campo = document.querySelector(tag);
campo.innerHTML = Texto;
responsiveVoice.speak (Texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'acertou !!')
        let palavratentativas = tentativas > 1 ? ('tentativas') : ('tentativa') ;
        let mensagemtentativas = (`Você acertou em ${tentativas} ${palavratentativas}`);
        exibirTextoNaTela ('p', mensagemtentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', (`o número é menor que ${chute}`));
    } else {
        exibirTextoNaTela ('p', (`o número é maior que ${chute}`));
    } 
    tentativas++;
    limparcampo()
}
}

function gerarUmNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length ;

   if ( quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];

   }
  
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
     return gerarUmNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
    
   

   }
}

function limparcampo() {
    chute = document.querySelector ('input');
    chute.value = ('');
}

function reiniciarJogo() {
    numeroSecreto = gerarUmNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    mensagemInicial();
document.getElementById ('reiniciar').setAttribute('disabled', true);
}