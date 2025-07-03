


let lista = document.createElement("ul");

for(let i = 0; i < 4; i++){

    let li = document.createElement("li");
    
    let texto = document.createTextNode("lista" + i);


    li.appendChild(texto);
    lista.appendChild(li);
}

let elementoPai = document.querySelector(".footer");

elementoPai.appendChild(lista);
