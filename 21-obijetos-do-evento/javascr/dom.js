

let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(e){
    console.log(e);
}

btn.addEventListener("click",msg);

btn2.addEventListener("click", function(nome){
    console.log(nome);
});



