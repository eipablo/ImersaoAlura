const perguntas = [
    {
        pergunta: "Qual fruta do diabo o Tony Tony Chopper comeu?",
        respostas: [
            { opcao: "Hito Hito no Mi", correto: true },
            { opcao: "Gomu Gomu no Mi", correto: false },
            { opcao: "Mera Mera no Mi", correto: false }
        ]
    },
    {
        pergunta: "Qual é o nome do navio dos Chapéus de Palha pós-timeskip?",
        respostas: [
            { opcao: "Going Merry", correto: false },
            { opcao: "Thousand Sunny", correto: true },
            { opcao: "Oro Jackson", correto: false }
        ]
    },
    {
        pergunta: "Quem foi o irmão adotivo de Luffy que morreu em Marineford?",
        respostas: [
            { opcao: "Sabo", correto: false },
            { opcao: "Ace", correto: true },
            { opcao: "Dragon", correto: false }
        ]
    }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const fimElemento = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
    if (indiceAtual >= perguntas.length) {
        finalizarJogo();
        return;
    }

    const perguntaAtual = perguntas[indiceAtual];
    
    progressoElemento.textContent = `Pergunta ${indiceAtual + 1}/${perguntas.length}`;
    perguntaElemento.textContent = perguntaAtual.pergunta;
    respostasElemento.innerHTML = "";

    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.classList.add("botao-resposta");
        botao.textContent = resposta.opcao;
        
        botao.addEventListener("click", () => {
            if (resposta.correto) {
                acertos++;
            }
            indiceAtual++;
            carregarPergunta();
        });
        
        respostasElemento.appendChild(botao);
    });
}

function finalizarJogo() {
    perguntaElemento.style.display = "none";
    respostasElemento.style.display = "none";
    progressoElemento.style.display = "none";
    
    fimElemento.style.display = "block";
    textoFinal.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
}

// Iniciar o quiz
carregarPergunta();