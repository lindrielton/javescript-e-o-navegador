
let novoElemento = document.createElement('p');
let texto = document.createTextNode('texto inserido');

novoElemento.appendChild(texto);


let elementoAlvo = document.querySelector('#titulo');
let elementopai = document.querySelector('div');



elementopai.insertBefore(novoElemento,elementoAlvo);


let elemento2 = document.createElement("strong");
let text1 = document.createTextNode("novo titulo");

elemento2.appendChild(text1);


let alvo = document.querySelector('#alvo');
let pai = document.querySelector('#pai');


pai.insertBefore(elemento2,alvo);