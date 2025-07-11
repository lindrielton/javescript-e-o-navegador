
let settmot ; 

window.addEventListener("mousemove", function(){
      clearTimeout(settmot);

      settmot = setTimeout(function() {
            console.log(settmot);
      }, 500);
})
