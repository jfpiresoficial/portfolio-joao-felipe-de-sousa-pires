// Função para abrir links externos (YouTube/Spotify)
function abrirLink(url) {
    if (confirm("Você deseja ser redirecionado para ouvir essa música?")) {
        window.open(url, '_blank');
    }
}

// Efeito simples de boas-vindas no console (estilo calouro)
console.log("Site de Rap Nacional carregado com sucesso!");
console.log("Rap é Compromisso!");
