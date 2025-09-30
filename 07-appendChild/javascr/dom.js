
let novoElemento = document.createElement('p');
let texto = document.createTextNode('texto inserido');

novoElemento.appendChild(texto);
novoElemento.style.background = "blue"

let p = document.querySelector('#paragrafo');
let pai = p.parentNode

pai.appendChild(novoElemento);



elementoNovo = document.createElement("li");
textoNovo = document.createTextNode("ultimo item");

elementoNovo.appendChild(textoNovo);


let referencia = document.querySelector('#ultima');
pa2 = referencia.parentNode;

pa2.appendChild(elementoNovo);


