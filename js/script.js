// =====================================================================
// script.js - Patinhas do Bem
// Este arquivo é carregado nas quatro páginas; por isso cada bloco
// confere se o elemento existe antes de usá-lo.
// =====================================================================

// ---------------------------------------------------------------------
// FUNCIONALIDADE 1: Validação do formulário (página contato.html)
// ---------------------------------------------------------------------
const formulario = document.getElementById("meu-formulario");
const feedback = document.getElementById("mensagem-feedback");

// Função chamada quando o formulário é enviado (evento "submit")
function validarFormulario(evento) {
    // Impede o envio/recarregamento padrão da página
    evento.preventDefault();

    // Lê os campos; trim() remove espaços sobrando no início e no fim
    const campoEmail = document.getElementById("email");
    const nome = document.getElementById("nome").value.trim();
    const email = campoEmail.value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Vai juntando as mensagens de erro encontradas
    let mensagemErro = "";

    if (nome.length < 3) {
        mensagemErro += "O nome deve ter no mínimo 3 caracteres. ";
    }

    // checkValidity() confere o formato do e-mail (type="email");
    // a checagem do "." evita aceitar algo como "ana@teste"
    if (email === "" || !campoEmail.checkValidity() || !email.includes(".")) {
        mensagemErro += "Digite um e-mail válido (ex.: nome@dominio.com). ";
    }

    if (assunto === "") {
        mensagemErro += "Preencha o assunto da mensagem. ";
    }

    if (mensagem.length < 10) {
        mensagemErro += "A mensagem deve ter no mínimo 10 caracteres. ";
    }

    // Mostra o resultado na própria página (elemento <output>)
    if (mensagemErro !== "") {
        feedback.textContent = "Erro: " + mensagemErro;
        feedback.className = "feedback erro";
    } else {
        feedback.textContent = "Dados válidos! Esta confirmação é apenas uma simulação: nenhum e-mail foi enviado e nenhum dado foi coletado.";
        feedback.className = "feedback sucesso";
        formulario.reset();
    }
}

if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
}

// ---------------------------------------------------------------------
// FUNCIONALIDADE 2: Mostrar / ocultar perguntas frequentes (sobre.html)
// ---------------------------------------------------------------------
const btnFaq = document.getElementById("btn-faq");
const painelFaq = document.getElementById("painel-faq");

// Função chamada a cada clique no botão (evento "click")
function alternarFaq() {
    if (painelFaq.hidden) {
        // Estava oculto: mostra o painel e troca o texto do botão
        painelFaq.hidden = false;
        btnFaq.textContent = "Ocultar perguntas frequentes";
        btnFaq.setAttribute("aria-expanded", "true");
    } else {
        // Estava visível: oculta o painel e volta o texto original
        painelFaq.hidden = true;
        btnFaq.textContent = "Mostrar perguntas frequentes";
        btnFaq.setAttribute("aria-expanded", "false");
    }
}

if (btnFaq && painelFaq) {
    btnFaq.addEventListener("click", alternarFaq);
}
