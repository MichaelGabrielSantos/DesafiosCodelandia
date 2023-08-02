

function Change(imagemClicada) {
    var srcDaImagem = imagemClicada.src;

    if(srcDaImagem == "http://127.0.0.1:5500/assets/image/heart.svg"){
        imagemClicada.src = "http://127.0.0.1:5500/assets/image/codicon_heart.svg"
    }else{
        imagemClicada.src = "http://127.0.0.1:5500/assets/image/heart.svg"
    }
}


ScrollReveal().reveal('.animate', {
    delay: 200,                 // Atraso antes de iniciar a animação em milissegundos
    distance: '30px',           // Distância do início da animação
    duration: 1000,             // Duração da animação em milissegundos
    easing: 'ease-out',         // Função de temporização CSS para a animação (ex: 'linear', 'ease-in', 'ease-out', 'ease-in-out')
    origin: 'top',           // Origem da animação ('top', 'right', 'bottom', 'left')
    opacity: 0,                 // Opacidade inicial (0 significa invisível)
    reset: true,               // Se a animação deve ser redefinida em cada exibição
    viewFactor: 0.2,            // Porcentagem da tela que o elemento precisa estar visível para disparar a animação
});