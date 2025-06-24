
let novoElemento = document.createElement('p');
let texto = document.createTextNode('racunamatata');

novoElemento.appendChild(texto);


let elemnto = document.querySelector("#paragrafo");
let paiElement = elemnto.parentNode;


paiElement.replaceChild(novoElemento, elemnto)



let elementoNovo = document.createElement('strong');
let conteudo = document.createTextNode('introdução');

elementoNovo.appendChild(conteudo);



let referencia = document.querySelector('#site');
let paiDoElemento = referencia.parentNode;


paiDoElemento.replaceChild(elementoNovo,referencia); 
//ele subistituio o link pela palavra;