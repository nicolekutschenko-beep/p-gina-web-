/* BOTÕES GOSTEI E NÃO GOSTEI */

const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {

    let curtiu = false;

    if (
        botao.textContent.includes("Gostei!") ||
        botao.textContent.includes("Não gostei!")
    ) {

        botao.addEventListener("click", function () {

            let texto = botao.querySelector("span");

            if (curtiu === false) {

                texto.textContent++;
                curtiu = true;

            } else {

                texto.textContent--;
                curtiu = false;

            }

        });

    }

});


/* SISTEMA DE COMENTÁRIOS */

function adicionarComentario() {

    let nome = document.getElementById("nome").value.trim();
    let comentario = document.getElementById("comentarioTexto").value.trim();

    if (nome === "" || comentario === "") {

        alert("Preencha seu nome e seu comentário.");
        return;

    }

    let novoComentario = document.createElement("div");

    novoComentario.classList.add("comentario");

    novoComentario.innerHTML =
        "<strong>" + nome + "</strong><br>" +
        comentario;

    document
        .getElementById("listaComentarios")
        .appendChild(novoComentario);

    document.getElementById("nome").value = "";
    document.getElementById("comentarioTexto").value = "";

}