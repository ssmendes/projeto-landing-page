/* 
quando clicar na seta para avançar tem que esconder todas as imagens e mostrar  a próxima imagem

    a imagem atual começa em 0 - porque é a primeira imagem
    assim que for clicado em avançar é preciso adicionar +1 ao contador de imagens para saber que a segunda imagem será mostrada

    esconder todas as imagens
        pegar todas as imagens usando DOM e remover a classe mostrar

    mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima e colocar nela a classe mostrar
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {
    //testar se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;
    }

    //adicionar +1
    imagemAtual++;

    esconderImagens();
    mostrarImagem();
});

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});