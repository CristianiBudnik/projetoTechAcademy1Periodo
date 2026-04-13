window.addEventListener('DOMContentLoaded', (event) => {
    
    const paginaToda = document.getElementById("conteudo-sensivel");
    const botaoTema = document.getElementById("botao-tema");
    const corpoPagina = document.body;

    // --- VERIFICAÇÃO DE IDADE ---
    if (paginaToda) {
        let nomeVisitante = prompt("Bem-vindo ao Crystal Runner! Qual é o seu nome?");
        if (!nomeVisitante) nomeVisitante = "Viajante";

        let idadeVisitante = prompt(`Olá, ${nomeVisitante}! Digite sua idade para acessar:`);

        if (idadeVisitante !== null && idadeVisitante !== "" && Number(idadeVisitante) >= 18) {
            alert("Acesso liberado, prepare-se para o desafio!");
            paginaToda.style.filter = "none";
            paginaToda.style.pointerEvents = "auto";
        } else {
            alert("Acesso restrito. O conteúdo permanecerá bloqueado para sua segurança.");
            paginaToda.style.filter = "blur(50px)";
            paginaToda.style.pointerEvents = "none";
        }
    }

    document.querySelector("iframe").focus();
    
});
 