document.addEventListener('DOMContentLoaded', function() {
    const iniciarBtn = document.getElementById('iniciarBtn');
    const resultadoBtn = document.getElementById('resultadoBtn');
    const infoJogador = document.getElementById('informacoesJogador');
    const infoComputador = document.getElementById('informacoesComputador');
    const resultadoFinal = document.getElementById('resultadoFinal');
    
    const OFICIAIS_MARINHA = [
        "Akainu", "Kizaru", "Fujitora", 
        "Garp", "Sengoku", "Smoker"
    ];
    
    iniciarBtn.addEventListener('click', function() {
        const piratas = [];
        const marinheiros = [];
        let forcaPiratas = 0;
        let forcaMarinha = 0;
        
        // Coletar nomes dos piratas
        for (let i = 1; i <= 3; i++) {
            let nome = prompt(`Digite o nome do Pirata ${i}:`);
            while (!nome) {
                nome = prompt(`Todo pirata precisa de nome! Digite o nome do Pirata ${i}:`);
            }
            piratas.push(nome);
            
            // Adicionar oficial da marinha
            const oficial = OFICIAIS_MARINHA[Math.floor(Math.random() * OFICIAIS_MARINHA.length)];
            marinheiros.push(oficial);
            
            // Calcular forças
            forcaPiratas += Math.floor(Math.random() * 10) + 1;
            forcaMarinha += Math.floor(Math.random() * 10) + 1;
        }
        
        infoJogador.textContent = `Sua tripulação: ${piratas.join(', ')}`;
        infoComputador.textContent = `Oficiais da Marinha: ${marinheiros.join(', ')}`;
        
        // Mostrar resultado quando clicar no botão
        resultadoBtn.onclick = function() {
            let resultado;
            
            if (forcaPiratas > forcaMarinha) {
                resultado = `VITÓRIA PIRATA! (${forcaPiratas} vs ${forcaMarinha})`;
            } else if (forcaMarinha > forcaPiratas) {
                resultado = `VITÓRIA DA MARINHA! (${forcaMarinha} vs ${forcaPiratas})`;
            } else {
                resultado = `EMPATE! (${forcaPiratas} vs ${forcaMarinha})`;
            }
            
            resultadoFinal.textContent = resultado;
            resultadoBtn.style.display = 'none';
            iniciarBtn.style.display = 'block';
            iniciarBtn.textContent = 'Jogar Novamente';
        };
        
        iniciarBtn.style.display = 'none';
        resultadoBtn.style.display = 'block';
    });
});