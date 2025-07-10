let input = document.querySelector("#input1");

input.addEventListener("focus",function(){
    console.log("entrou");
    //detequita quando  a area e clicada
});



input.addEventListener("blur", function(){
    console.log("ele vai detectar quando o cursor sair");
    //detecta QUANDO A AREA FOI DESFOCADA
});