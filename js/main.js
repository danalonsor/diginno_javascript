
/*var nome = "Daniel Alonso";
var idade = 37;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!"

//alert("Meu nome é" + nome + "tenho" + idade + "anos");
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase()); 

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); // add item a lista
lista.pop(); // remove ultimos add a lista

console.log(lista);
console.log(lista.length); // tamanho da lista
console.log(lista.reverse()); // tras lista reversa
console.log(lista.toString()); // tras a escrita
console.log(lista.join(" | ")); // add elemento de união

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var censura = prompt("Qual a sua idade?");
    if (censura >= 18) {
        alert("Maior de idade");
    }else{
        alert("Menor de idade");
    };

Instruções basicas */


/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var validar;
function validaIdade(idade){
   if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);

Intermediario */

function clicou(){
    document.getElementById("agradeco").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradeco"));
    //alert("Obrigado por participar!");
}

function redirecionar(){
    window.open("https://google.com/");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "<b><i>Abra Cadabra! Feito</i></b>";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}