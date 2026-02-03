listaDeNumeroSorteado = []; 
let numeroLimite = 10; 
let numeroSecreto = gerarNumerosecreto(); 
let tentativas = 1; 


function exibirTextoNaTela(tag, texto){ 
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
   if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
} 

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Digite um número entre 1 e 10'); 
} 

exibirMensagemInicial(); 

function verificarChute(){ 
    let chute = document.querySelector('input').value; 
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'; 
    let mensagemTentativa = `Parabéns! Você acertou o número secreto com ${tentativas} ${palavraTentativa}` 

    if(chute == numeroSecreto){ 
        exibirTextoNaTela('h1', 'Acertouuu!'); 
        exibirTextoNaTela('p', mensagemTentativa); 

        document.getElementById('reiniciar').removeAttribute('disabled'); 

    } else { 
        if(chute > numeroSecreto){ 
            exibirTextoNaTela('p', 'O número secreto é menor!'); 
        } else { 
            exibirTextoNaTela('p', 'O número secreto é maior!'); 
        } 
        tentativas++; 
        limparCampo() 
    } 
} 
function gerarNumerosecreto(){ 

    let numeroAleatorio = parseInt(Math.random() * numeroLimite) + 1; 
    let quatidadeDeElementosNaLista = listaDeNumeroSorteado.length;
    
    if (listaDeNumeroSorteado.length == 10){ 
        listaDeNumeroSorteado = []; 
    } 
    
    if(listaDeNumeroSorteado.includes(numeroAleatorio)){ 
        return gerarNumerosecreto(); 
    } else { 
        listaDeNumeroSorteado.push(numeroAleatorio); 
        console.log(listaDeNumeroSorteado); 

        return numeroAleatorio; 
    } 
} 
function limparCampo(){ 
    let chute = document.querySelector('input');
    chute.value = ''; 
} 
function reiniciarJogo(){ 
    exibirMensagemInicial(); 
    numeroSecreto = gerarNumerosecreto(); 
    tentativas = 1; 
    limparCampo(); 

document.getElementById('reiniciar').setAttribute('disabled', true); 

} 

