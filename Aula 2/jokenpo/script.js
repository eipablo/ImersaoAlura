function jogar() {
    let year = prompt("Qual a sua idade? ");

    if (year < 18) {
    alert("Esse jogo não é para você!");
    alert("Você será redirecionado para uma página adequada a sua idade.");
    window.location.href = "https://www.clickjogos.com.br/jogos-infantis";
    } else {
    alert("Você pode jogar!");

    escolhaJogador = prompt("Digite 1 - Tesoura, 2 - Pedra, 3 - Papel");
    escolhaComputador = Math.floor(Math.random() * 3) + 1; 

    if (escolhaJogador == "1") {
        alert("Você escolheu Tesoura");
    } else if (escolhaJogador == "2") {
        alert("Você escolheu Pedra");
    } else if (escolhaJogador == "3") {
        alert("Você escolheu Papel");
    }

    if (escolhaComputador == "1") {
        alert("A Cpu escolheu Tesoura");
    } else if (escolhaComputador == "2") {
        alert("A Cpu escolheu Pedra");
    } else {
        alert("A Cpu escolheu Papel");
    }

    if (escolhaJogador == escolhaComputador) {
        alert("Empate!");
    }

    if (escolhaJogador == "1") {
        if (escolhaComputador == "2") {
        alert("CPU venceu!");
        }
        if (escolhaComputador == "3") {
        alert("Você venceu!");
        }
    }

    if (escolhaJogador == "2") {
        if (escolhaComputador == "1") {
        alert("Você venceu!");
        }
        if (escolhaComputador == "3") {
        alert("CPU venceu!");
        }
    }

    if (escolhaJogador == "3") {
        if (escolhaComputador == "1") {
        alert("CPU venceu!");
        }
        if (escolhaComputador == "2") {
        alert("Você venceu!");
        }
    }
    }
}

// condições
// Tesoura = 1, Pedra = 2, Papel = 3.
// jogador papel, cpu papel = empate
// jogador pedra, cpu pedra = empate
// jogador tesoura, cpu tesoura = empate

// jogador tesoura, cpu pedra = cpu ganha
// jogador tesoura, cpu papel = jogador ganha

// jogador pedra, cpu papel = cpu ganha
// jogador pedra, cpu tesoura = jogador ganha

// jogador papel, cpu tesoura = cpu ganha
// jogador papel, cpu pedra = jogador ganha
