let contador = 0;
let almacen = 0;

function Tirardados() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        almacen = randomNumber1 + almacen;

        document.querySelector(".img1").setAttribute("src",
            "dado" + randomNumber1 +".png");
    }, 250)
    document.getElementById("boton1").innerHTML;
    contador = contador + 1;
    if(contador > 3){
        alert("Ya realizo todos sus intentos."+"\n"+ "La suma de sus intentos es "+almacen);
    } 
}