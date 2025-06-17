
let novoElemento = document.createElement('p');
let texto = document.createTextNode('texto inserido');

novoElemento.appendChild(texto);


let elementoAlvo = document.querySelector('#titulo');
let elementopai = document.querySelector('div');



elementopai.insertBefore(novoElemento,elementoAlvo);