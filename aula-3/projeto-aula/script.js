

function jogar(){

    let rodada = 1;

    while (rodada <= 3){

        
        
        escolhaJogador = prompt ("Escolha um vidro de 1 - 3");
        if (escolhaJogador == "1" || escolhaJogador == "2" || escolhaJogador == "3") {
        brokenGlass = Math.floor(Math.random() * 3) + 1;
        alert ("Rodada n°" + rodada);
        

        if (escolhaJogador == brokenGlass){
            alert ("Você morreu! Você pisou no vidro quebrado" );
            rodada = 1000000000;
        } else{
            alert ("Você passou para a próxima rodada! O vidro quebrado era o " + brokenGlass);
        }

        if (rodada == 3){
            alert ("Você venceu! Parabéns!!!");
        }

        rodada = rodada + 1;
        } else {
            alert("Por favor insira um número válido!");
        }
    }
}
