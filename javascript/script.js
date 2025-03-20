console.log("hello world!")
let numero = 0
let numero1 = 1
let numero2 = 2

function par_impar(numero) {

    if (numero % 2 === 0) { console.log("o numero é par"); }
    else {
        console.log("o numero é impar");
    }
}
par_impar(10)
function calculadora(numero1, numero2) {
    console.log(numero1 + numero2);
    console.log(numero1 - numero2);
    console.log(numero1 * numero2);
    console.log(numero1 / numero2);

}
let i = 1
function contagem(i) {
    while (i <= 10) {
        i++
        console.log(i);
    }
}
contagem(1)
var splitString
var reverser
var juntar

function reverter(str) {
    str.split("").reverse().join("")
    console.log(str)
}

reverter("javascript")

function contaCAractere(str) {

    var str3 = prompt("insira")
    console.log(
        "a palavra: " + str3 + " tem " + (str3.length) + " caracteres"
    );
}
contaCAractere("")

const carro = {
    modelo: "uno",
    marca: "fiat",
    ano: "2001"
}
function mensagemPersonalizada(nome, mensagem) {
    var nome = prompt("qual o seu nome")
    var mensagem = "ola! "
    prompt(mensagem + nome)
}
mensagemPersonalizada()

function media(i) {
    var i
    while (i >= 3) {
        i++;
    }
    i / 3
    console.log(i)
}
media(i)
var pontos;
for (pontos = 0; pontos < 21; pontos++) {
    if (pontos % 3 === 0) {
        console.log("o numero " + pontos + " é par")
    } else {
        console.log
            ("o numero " + pontos + " é impar")
    }
}
function verificarpalindromo(str) {

    if (str === str.split("").reverse().join("")) {
        console.log("true")
    }
}
verificarpalindromo("ASA")