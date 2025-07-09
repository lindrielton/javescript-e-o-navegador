

let btn = document.querySelector("#btn1");

function msg(){
    console.log('olá sejá bem vindo');
}

btn.addEventListener("click",msg);

btn.addEventListener("click", function(){
    btn.removeEventListener("click", msg);
})



