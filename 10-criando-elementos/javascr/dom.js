
let lista = document.createElement('ul');

for(let i = 0; i < 5; i++){

    let item = document.createElement('li');

    let texto = document.createTextNode(`item criado` + i);

    item.appendChild(texto);

    lista.appendChild(item);
}

let container = document.querySelector('.container');

container.appendChild(lista);