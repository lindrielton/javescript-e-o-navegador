
btn = document.querySelector("#btn");
btn2 = document.querySelector("#btn2");

btn.addEventListener("mousedown", function (){
    console.log("apertou o botão");
});


btn.addEventListener("mouseup", function(){
    console.log("soltou o botão");
    //para soltar o botão
});


btn2.addEventListener("dblclick", function(){
    console.log("clicou duas vezes");
})

// parausarmos o botão direito e preciso 
// fazer uma pequena ganbiarra
// ex ;


btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();// para o menur não aparecer
    console.log("clicou com o botão direito");
})