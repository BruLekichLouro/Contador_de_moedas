var valorEmDolar= 64;
var cotacaoDoDolar = 5.32;
var valorEmReal= valorEmDolar*cotacaoDoDolar;
valorEmReal= valorEmReal.toFixed(2);
var nome = prompt("Digite seu nome: ");


alert(nome + " o valor do dólar está em R$ " + valorEmReal);