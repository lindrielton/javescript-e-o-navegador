
let paragrafo = document.createElement("h2");

let texto = document.createTextNode("novo titulo");
paragrafo.appendChild(texto);

let referencia = document.querySelector(".titulo");

let pai = document.querySelector(".pai");

pai.insertBefore(paragrafo,referencia);

// criando e manipulando elementos;


let frase = document.createElement("a");
let link = document.createTextNode("click no link");

frase.appendChild(link)

let elementofilho = document.querySelector(".io");
let paiMestre = elementofilho.parentNode;


paiMestre.replaceChild(frase,elementofilho)


