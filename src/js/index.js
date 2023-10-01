/*hello workd */

// oi

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        botao.classList.add('selecionado');

        desselecionarPersonagem();

        personagens[indice].classList.add("selecionado");

        function desselecionarBotao() {
            const botaoselecionado = document.querySelector(".botao.selecionado");
            botaoselecionado.classList.remove("selecionado");
        }
    });
});


function desselecionarPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");

    personagemselecionado.classList.remove("selecionado");
}

