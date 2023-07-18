// FUNÇÃO CARROSEL DE IMAGENS
// Declarar variáveis para armanezar; lista de imagens, setaVoltar, setaAvançar e imagem atual.
// Remover a classe "mostrar" de todos os elementos que podem contê-lo.
// Adicionar a classe no elemento que precisa mostrar atualmente.

// Função para quando clicar em avançar, trocar a imagem:
    // condição para se a imagem atual não for do mesmo tamanho da lista(significa que pode avançar)
    // incrementar na lista +1;
    // rodar a função de esconder todas e em seguida a de mostrar a imagem atual

// Função para quando clicar em voltar, trocar imagem;
    // condição para se a imagem atual não for igual a 0 (significa que pode voltar)
    // decrementar na lista -1.
    // rodar a função de esconder todas e em seguida a de mostrar a imagem atual

const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvançar = document.getElementById('btn-avancar')
let imagemAtual = 0


function esconderImagens(){
    imagens.forEach(imagem =>{
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar')
};

setaAvançar.addEventListener('click', function () {
    if (imagemAtual !== imagens.length -1) {
        imagemAtual++
    }

    esconderImagens()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function(){
    if (imagemAtual !== 0){
        imagemAtual--
    }

    esconderImagens()
    mostrarImagem()
})