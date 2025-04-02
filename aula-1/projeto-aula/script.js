let wons = 1000000;


let wonsformatado = wons.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

console.log(wonsformatado);


function conversor() {
    let rp = prompt("Digite a quantidade de Riot Points que você gostaria: ");
    let resultado = rp * 0.032869;
    alert(rp + " de Riot Points em Reais é igual a: R$" + resultado.toFixed(2));
}