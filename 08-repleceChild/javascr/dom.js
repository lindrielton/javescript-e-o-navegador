
let novoElemento = document.createElement('p');
let texto = document.createTextNode('racunamatata');

novoElemento.appendChild(texto);


let elemnto = document.querySelector("#paragrafo");
let paiElement = elemnto.parentNode;


paiElement.replaceChild(novoElemento, elemnto)