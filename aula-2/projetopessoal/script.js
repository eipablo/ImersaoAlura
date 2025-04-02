// Tesoura corta Papel
// Papel cobre Pedra
// Pedra esmaga Lagarto
// Lagarto envenena Spock
// Spock quebra Tesoura
// Tesoura decapita Lagarto
// Lagarto come Papel
// Papel refuta Spock
// Spock vaporiza Pedra
// Pedra quebra Tesoura
// Pedra = 1, Papel = 2, Tesoura = 3, Lagarto = 4, Spock = 5

//variavel para adicionar a opção do jogador
let escolhaJogador;

function pedra(){
    escolhaJogador = "pedra"
    iniciarJogo();
    
}  

function papel(){
    escolhaJogador = "papel"
    iniciarJogo();
    
}

function tesoura(){
    escolhaJogador = "tesoura"
    iniciarJogo();
}

function lagarto(){
    escolhaJogador = "lagarto"
    iniciarJogo();
}

function spock(){
    escolhaJogador = "spock"
    iniciarJogo();
}

function iniciarJogo(){
    alert("Você escolheu " + escolhaJogador);

    escolhaCpu = Math.floor(Math.random() * 5 ) +1

    if(escolhaCpu == "1"){
        escolhaCpu = "pedra";
    } else if (escolhaCpu == "2"){
        escolhaCpu = "tesoura";
    } else if (escolhaCpu == "3"){
        escolhaCpu = "papel";
    } else if (escolhaCpu == "4"){
        escolhaCpu = "lagarto";
    } else if (escolhaCpu == "5"){
        escolhaCpu = "spock";
    }

    alert("A CPU escolheu " + escolhaCpu);

    if (escolhaJogador == escolhaCpu){
        alert("Empate!");
    } 

    if (escolhaJogador == "pedra") {
        if (escolhaCpu == "papel") {
            alert("Vitória da CPU! Papel cobriu a Pedra")
        } 
        if (escolhaCpu == "tesoura") {
            alert("Você venceu! Pedra quebrou a Tesoura")
        } 
        if (escolhaCpu == "lagarto") {
            alert("Você venceu! Pedra esmagou o Lagarto")
        } 
        if (escolhaCpu == "spock") {
            alert("Vitória da CPU! Spock vaporizou a Pedra")
        }
    }
    
    if (escolhaJogador == "papel") {
        if (escolhaCpu == "pedra") {
            alert("Você venceu! Papel cobriu a Pedra")
        } 
        if (escolhaCpu == "tesoura") {
            alert("Vitória da CPU! Tesoura cortou o Papel")
        } 
        if (escolhaCpu == "lagarto") {
            alert("Vitória da CPU! Lagarto comeu o Papel")
        } 
        if (escolhaCpu == "spock") {
            alert("Você venceu! Papel refutou o Spock")
        }
    }
    
    if (escolhaJogador == "tesoura") {
        if (escolhaCpu == "pedra") {
            alert("Vitória da CPU! Pedra quebrou a Tesoura")
        } 
        if (escolhaCpu == "papel") {
            alert("Você venceu! Tesoura cortou o Papel")
        } 
        if (escolhaCpu == "lagarto") {
            alert("Você venceu! Tesoura decapitou o Lagarto")
        } 
        if (escolhaCpu == "spock") {
            alert("Vitória da CPU! Spock quebrou a Tesoura")
        }
    }
    
    if (escolhaJogador == "lagarto") {
        if (escolhaCpu == "pedra") {
            alert("Vitória da CPU! Pedra esmagou o Lagarto")
        } 
        if (escolhaCpu == "papel") {
            alert("Você venceu! Lagarto comeu o Papel")
        } 
        if (escolhaCpu == "tesoura") {
            alert("Vitória da CPU! Tesoura decapitou o Lagarto")
        } 
        if (escolhaCpu == "spock") {
            alert("Você venceu! Lagarto envenenou o Spock")
        }
    }
    
    if (escolhaJogador == "spock") {
        if (escolhaCpu == "pedra") {
            alert("Você venceu! Spock vaporizou a Pedra")
        } 
        if (escolhaCpu == "papel") {
            alert("Vitória da CPU! Papel refutou o Spock")
        } 
        if (escolhaCpu == "tesoura") {
            alert("Você venceu! Spock quebrou a Tesoura")
        } 
        if (escolhaCpu == "lagarto") {
            alert("Vitória da CPU! Lagarto envenenou o Spock")
        }
    }
}