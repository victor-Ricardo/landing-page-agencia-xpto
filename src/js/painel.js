const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const imagem = document.querySelectorAll('.imagem-painel');

let imagemAtual = 0;

function esconderImagemSelecionado() {
    const imagemSelecionado = document.querySelector('.selecionado');
    imagemSelecionado.classList.remove('selecionado');
}

function mostrarImagem( indiceImagem) {
    imagem[indiceImagem].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {

    if (imagemAtual === imagem.length - 1) return;

    esconderImagemSelecionado();

    imagemAtual++;
    mostrarImagem(imagemAtual);
});

btnVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) return;

    esconderImagemSelecionado();

    imagemAtual--;
    mostrarImagem(imagemAtual);
});